import { Fade, Slide } from "react-reveal";

export default function () {
  return (
    <div className="w-full items-center justify-center flex gap-8">
      <Fade bottom distance="50px">
        <div className="avatar">
          <div className="w-32 rounded-full brightness-[1.1] saturate=[1.1]">
            <img src="/pfp.jpeg" />
          </div>
        </div>
      </Fade>

      <div className="prose flex flex-col">
        <Fade right duration={1000} distance={"200px"}>
          <h3 className="m-0">Hey there!👋</h3>
        </Fade>
        <Fade right duration={1000} distance={"200px"} delay={"500"}>
          <h2 className="m-0">I'm Adrian</h2>
        </Fade>
        <h3 className="m-0">(But you can call me Cacho)</h3>
        <div className="flex items-center gap-[1ch]">
          <h3 className="m-0">Visual Artist 👾</h3>
          <h3 className="m-0">Designer 🧩</h3>
          <h3 className="m-0">Developer 🛠️</h3>
        </div>
      </div>
    </div>
  );
}
