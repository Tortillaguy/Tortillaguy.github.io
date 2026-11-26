import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars, useAnimations, useGLTF } from "@react-three/drei";
import { Bloom, BrightnessContrast, EffectComposer } from "@react-three/postprocessing";

// Ported from PokeMoon-DeFi/nft-frontend ModelViewer.tsx (2021), minus MUI and the GPU tier gate.

export interface CardModel {
  name: string;
  src: string;
}

function Card({ src }: { src: string }) {
  const gltf = useGLTF(src);
  const { ref, names, actions } = useAnimations(gltf.animations);

  useEffect(() => {
    for (const name of names) actions[name]?.play();
  }, [names, actions]);

  return <primitive object={gltf.scene} ref={ref} dispose={null} />;
}

export default function CardViewer({ models }: { models: CardModel[] }) {
  const [i, setI] = useState(0);
  const model = models[i];
  const step = (d: number) => setI((i + d + models.length) % models.length);

  return (
    <div className="relative h-[460px] md:h-[620px] bg-black touch-none">
      <div className="absolute z-10 top-0 left-0 p-4 md:p-6 font-smono text-encore-fg text-[11px] md:text-[13px] tracking-[2px]">
        {model.name.toUpperCase()}
        <span className="text-encore-dim"> — DRAG TO ROTATE</span>
      </div>
      {models.length > 1 && (
        <div className="absolute z-10 bottom-0 left-0 right-0 flex justify-between p-4 md:p-6">
          {[-1, 1].map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => step(d)}
              aria-label={d < 0 ? "Previous card" : "Next card"}
              className="font-smono text-encore-accent text-[13px] tracking-[2px] border border-encore-line px-4 py-2 hover:bg-encore-surface transition-colors"
            >
              {d < 0 ? "← PREV" : "NEXT →"}
            </button>
          ))}
        </div>
      )}
      <Canvas>
        <PerspectiveCamera position={[0, 1.3, 4]} makeDefault />
        <OrbitControls target={[0, 1.3, 0]} enableZoom={false} />
        <directionalLight intensity={0.3} position={[-1, -1, 3]} />
        <directionalLight intensity={0.3} position={[1, 1, 3]} />
        <directionalLight intensity={0.3} position={[0, 0, -1]} />
        <Stars />
        <Suspense fallback={null}>
          <Card key={model.src} src={model.src} />
        </Suspense>
        <EffectComposer>
          <BrightnessContrast brightness={0.2} contrast={0.4} />
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={1} height={80} intensity={0.3} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
