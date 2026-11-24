const FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uTex;
uniform vec2 uRes;      // canvas size in device px
uniform vec2 uPointer;  // pointer in uv, y up
uniform float uBase;    // base fringe, device px
uniform float uBoost;   // velocity-driven extra fringe, device px
uniform float uTime;
uniform float uGlitch;  // 0 under reduced motion
uniform float uMax;     // cap on total fringe, device px

const vec3 CYAN = vec3(0.31, 0.89, 1.0);
const vec3 MAGENTA = vec3(1.0, 0.29, 0.85);

float hash(float n) { return fract(sin(n) * 43758.5453); }

void main() {
vec2 toPointer = (vUv - uPointer) * vec2(uRes.x / uRes.y, 1.0);
float near = exp(-dot(toPointer, toPointer) * 18.0);
float band = step(0.992, hash(floor(vUv.y * 48.0) * 91.7 + floor(uTime * 10.0))) * uGlitch;
float px = min(uBase + uBoost + near * 5.0 + band * 6.0, uMax);
vec2 d = vec2(px / uRes.x, 0.0);

vec4 c = texture(uTex, vUv);
float left = texture(uTex, vUv + d).a;
float right = texture(uTex, vUv - d).a;
float fl = max(left - c.a, 0.0) * 0.5;
float fr = max(right - c.a, 0.0) * 0.5;
outColor = vec4(c.rgb + CYAN * fl + MAGENTA * fr, clamp(c.a + fl + fr, 0.0, 1.0));
}`;

const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

export const supported =
  "drawElementImage" in CanvasRenderingContext2D.prototype &&
  typeof WebGL2RenderingContext !== "undefined" &&
  "texElementSubImage2D" in WebGL2RenderingContext.prototype;

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? "shader");
  return s;
}

// Moves `layer` (real DOM) into a drawable canvas and renders it through the fringe shader.
// Returns false when the browser lacks HTML-in-canvas or WebGL2, leaving the CSS fringe in place.
export function enhance(section: HTMLElement, layer: HTMLElement): boolean {
  if (!supported) return false;
  const canvas = document.createElement("canvas") as HTMLCanvasElement & Record<string, any>;
  canvas.className = "absolute inset-0 w-full h-full";
  canvas.setAttribute("content", "drawable");
  canvas.setAttribute("layoutsubtree", "");
  const gl = canvas.getContext("webgl2", { premultipliedAlpha: true }) as WebGL2RenderingContext & Record<string, any>;
  if (!gl) return false;

  for (const el of layer.querySelectorAll("[data-fringe]")) el.className = el.getAttribute("data-fringe")!;
  layer.classList.remove("absolute", "inset-0");
  layer.setAttribute("drawable", "");
  section.appendChild(canvas);
  canvas.appendChild(layer);

  const program = gl.createProgram()!;
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(program);
  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

  const u = (name: string) => gl.getUniformLocation(program, name);
  const uRes = u("uRes"), uPointer = u("uPointer"), uBase = u("uBase");
  const uBoost = u("uBoost"), uTime = u("uTime"), uGlitch = u("uGlitch"), uMax = u("uMax");
  gl.uniform1i(u("uTex"), 0);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: -10, y: -10 };
  let boost = 0;
  let lastY = window.scrollY;
  let visible = true;

  section.addEventListener("pointermove", (e) => {
    const r = section.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = 1 - (e.clientY - r.top) / r.height;
    if (!reduced.matches) boost = Math.min(boost + Math.hypot(nx - pointer.x, ny - pointer.y) * 40, 5);
    pointer.x = nx;
    pointer.y = ny;
  });
  section.addEventListener("pointerleave", () => { pointer.x = pointer.y = -10; });
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) canvas.requestPaint();
  }).observe(section);
  new ResizeObserver(([entry]) => {
    canvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
    canvas.height = entry.devicePixelContentBoxSize[0].blockSize;
    canvas.requestPaint();
  }).observe(canvas, { box: "device-pixel-content-box" });

  canvas.onpaint = (event: Event & { changedElements?: Element[] }) => {
    if (Array.from(event.changedElements ?? []).includes(layer)) {
      const { width, height } = canvas.getElementImageDefaultSize(layer);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texElementSubImage2D(gl.TEXTURE_2D, 0, 0, 0, layer);
      canvas.updateElementGeometry(layer, { canvasTransform: new DOMMatrix() });
    }

    const dy = Math.abs(window.scrollY - lastY);
    lastY = window.scrollY;
    if (!reduced.matches) boost = Math.min(boost + dy * 0.15, 5);
    boost *= 0.9;

    const dpr = window.devicePixelRatio || 1;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform2f(uPointer, reduced.matches ? -10 : pointer.x, pointer.y);
    gl.uniform1f(uBase, (window.innerWidth >= 768 ? 2 : 1) * dpr);
    gl.uniform1f(uBoost, boost * dpr);
    gl.uniform1f(uTime, performance.now() / 1000);
    gl.uniform1f(uGlitch, reduced.matches ? 0 : 1);
    gl.uniform1f(uMax, 6 * dpr);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    if (visible && !reduced.matches) canvas.requestPaint();
  };
  canvas.requestPaint();
  return true;
}
