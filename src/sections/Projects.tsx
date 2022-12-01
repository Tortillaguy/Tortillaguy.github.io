import Card from "../components/Card";
import projects from "../data/projects";

export default function () {
  return (
    <>
      <div className="w-full flex justify-center prose m-auto">
        <h2 id={"projects"} className="m-0 text-white text-shadow">
          Projects
        </h2>
      </div>
      <div className="card-list justify-start self-start gap-2">
        {projects.map((project, key) => (
          <Card project={project} key={key} />
        ))}
      </div>
    </>
  );
}
