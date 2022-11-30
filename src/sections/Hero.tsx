import { Fade, Slide } from "react-reveal";

export default function () {
  return (
    <div className="w-full items-center justify-center flex gap-8 my-8 flex-col md:flex-row">
      <Fade bottom distance="50px">
        <div className="avatar">
          <div className="w-32 rounded-full brightness-[1.1] saturate-[1.1]">
            <img src="/pfp.jpeg" />
          </div>
        </div>
      </Fade>

      <div className="prose flex flex-col [&>*]:text-white text-shadow">
        <Fade right duration={1000} distance={"200px"}>
          <h3 className="m-0">Hey there!👋</h3>
        </Fade>
        <Fade right duration={1000} distance={"200px"} delay={600}>
          <h2 className="m-0">I'm Adrian</h2>
        </Fade>
        <Fade right duration={1000} distance={"200px"} delay={1600}>
          <h3 className="m-0">(But you can call me Cacho)</h3>
        </Fade>
        <Fade cascade right delay={3000}>
          <div className="flex flex-col md:gap-[1ch]md:flex-row [&>*]:text-white text-shadow">
            <h3 className="m-0">Visual Artist 👾</h3>
            <h3 className="m-0">Designer 🧩</h3>
            <h3 className="m-0">Developer 🛠️</h3>
          </div>
        </Fade>
      </div>
    </div>
  );
}
