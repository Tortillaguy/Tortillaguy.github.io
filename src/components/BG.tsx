import Silk from "./Silk";

export default function Background() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[-1]">
      <Silk
        speed={3.5}
        scale={1}
        color="#5227FF"
        noiseIntensity={0.6}
        rotation={0}
      />
    </div>
  );
}
