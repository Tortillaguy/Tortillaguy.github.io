import Silk from "./Silk";

export default function Background() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[-1]">
      <Silk
        speed={7.6}
        scale={1}
        color="#5227FF"
        noiseIntensity={5.5}
        rotation={0}
      />
    </div>
  );
}
