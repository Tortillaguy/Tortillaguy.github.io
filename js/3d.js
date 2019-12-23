$(function(){
	var scene, camera, canvas, renderer, clock, time;

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	camera.position.z = 4;
	camera.position.y = 6;
	clock = new THREE.Clock();
	time = 0;

	canvas = $("#canvas");
	renderer = new THREE.WebGLRenderer({canvas: canvas[0], antialias:true});
	renderer.setClearColor("#28EE6A");

	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
	
	// Create a Cube Mesh with basic material
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
	var cube = new THREE.Mesh( geometry, material );


	var materialShaders = [];
	var speed = 10;			
	scene.background = new THREE.Color(0xADA8BE);
	scene.fog = new THREE.Fog(scene.background, 42.5, 50);


	// GROUND AND ROAD
	var planeGeom = new THREE.PlaneBufferGeometry(100, 100, 200, 200);
	planeGeom.rotateX(-Math.PI * 0.5);
	var planeMat = new THREE.MeshBasicMaterial({
	  color: 0xff00ee
	});

	planeMat.onBeforeCompile = shader => {
	  shader.uniforms.time = { value: 0 };
	  shader.vertexShader =
	    `
	    uniform float time;
	    varying vec3 vPos;
	  ` + noise + shader.vertexShader;
	  shader.vertexShader = shader.vertexShader.replace(
	    `#include <begin_vertex>`,
	    `#include <begin_vertex>
	      vec2 tuv = uv;
	      float t = time * 0.01 * ${speed}.; 
	      tuv.y += t;
	      transformed.y = snoise(vec3(tuv * 5., 0.)) * 5.;
	      transformed.y *= smoothstep(5., 15., abs(transformed.x)); // road stripe
	      vPos = transformed;
	    `
	  );
	  shader.fragmentShader =
	    `
	    #extension GL_OES_standard_derivatives : enable

	    uniform float time;
	    varying vec3 vPos;

	    float line(vec3 position, float width, vec3 step){
	      vec3 tempCoord = position / step;
	      
	      vec2 coord = tempCoord.xz;
	      coord.y -= time * ${speed}. / 2.;

	      vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord * width);
	      float line = min(grid.x, grid.y);
	      
	      return min(line, 1.0);
	    }
	  ` + shader.fragmentShader;
	  shader.fragmentShader = shader.fragmentShader.replace(
	    `gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
	    `
	    float l = line(vPos, 2.0, vec3(2.0));
	    vec3 base = mix(vec3(0, 0.75, 1), vec3(0), smoothstep(5., 7.5, abs(vPos.x)));
	    vec3 c = mix(outgoingLight, base, l);
	    gl_FragColor = vec4(c, diffuseColor.a);
	    `
	  );
	  materialShaders.push(shader);
	};

	var plane = new THREE.Mesh(planeGeom, planeMat);
	scene.add(plane);

	// Add cube to Scene
	scene.add( cube );

	// Render Loop
	var render = function () {
	  requestAnimationFrame( render );

	   time = clock.getElapsedTime();
	  materialShaders.forEach(m => {
	    m.uniforms.time.value = time;
	  });

	  cube.rotation.x += 0.01;
	  cube.rotation.y += 0.01;

	  renderer.render(scene, camera);

	};

	render();


	function resizeCanvas(){
		canvas.width(window.innerWidth);
		canvas.height(canvas.innerHeight);
		renderer.setSize(canvas.width(), canvas.height());
		camera.aspect = canvas[0].clientWidth / canvas[0].clientHeight;
  		camera.updateProjectionMatrix();
	}	


});