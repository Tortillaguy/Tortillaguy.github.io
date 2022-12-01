import Card from "../components/Card";
import art from "../data/art";

export default function () {
  return (
    <>
      <div className="w-full flex justify-center prose m-auto">
        <h2 id="art" className="m-0 text-white text-shadow">
          Art
        </h2>
      </div>
      <div className="card-list justify-start self-start gap-2">
        {art.map((project, key) => (
          <Card project={project} key={key} />
        ))}
      </div>
    </>
  );
}
