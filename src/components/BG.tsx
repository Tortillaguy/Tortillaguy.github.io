import Silk from "./Silk";

export default function Background() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[-1]">
      {/* <PrismaticBurst
        animationType="rotate3d"
        intensity={2}
        speed={0.5}
        // distort={1.0}
        // paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0}
        rayCount={24}
        mixBlendMode="lighten"
        colors={["#f2ff38", "#bd55fa", "#ff4e3b", "#29e2ff"]}
      /> */}
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
