import PrismaticBurst from "./PrismaticBurst";

export default function Background() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[-1]">
      <PrismaticBurst
        animationType="rotate3d"
        intensity={2.5}
        speed={0.5}
        // distort={1.0}
        // paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0}
        rayCount={24}
        mixBlendMode="lighten"
        colors={["#f2ff38", "#bd55fa", "#ff4e3b", "#29e2ff"]}
      />
    </div>
  );
}
