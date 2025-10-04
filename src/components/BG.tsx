import PrismaticBurst from "./PrismaticBurst";

export default function Background() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[-1]">
      <PrismaticBurst
        animationType="rotate3d"
        intensity={3}
        speed={0.5}
        // distort={1.0}
        // paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={24}
        mixBlendMode="lighten"
        colors={["#f2ff38", "#bd55fa", "#ff4e3b"]}
      />
    </div>
  );
}
