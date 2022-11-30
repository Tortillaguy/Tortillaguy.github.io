import Card from "../components/Card";
import projects from "../data/projects";

export default function () {
  return (
    <div className="w-full flex flex-col items-center justify-center prose gap-0">
      <h2 className="m-0">Projects</h2>
      <div className="card-list justify-start self-start gap-2">
        {projects.map((project, key) => (
          <Card project={project} key={key} />
        ))}
      </div>
    </div>
  );
}
