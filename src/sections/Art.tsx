import Card from "../components/Card";
import art from "../data/art";

export default function () {
  return (
    <div
      id="art"
      className="w-full flex flex-col items-center justify-center prose gap-0"
    >
      <h2 className="m-0 text-white text-shadow">Art</h2>
      <div className="card-list justify-start self-start gap-2">
        {art.map((project, key) => (
          <Card project={project} key={key} />
        ))}
      </div>
    </div>
  );
}
