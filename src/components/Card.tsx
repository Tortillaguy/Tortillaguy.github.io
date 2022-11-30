import type { Project } from "../types";
import Tag from "./Tag";

interface ProjectProps {
  project: Project;
}

export default function (props: ProjectProps) {
  const { project } = props;
  const { filename, name, role, tags } = project;

  return (
    <div className="card min-w-[16rem] h-min bg-base-100 shadow-xl not-prose flex-grow border-solid border-2 border-cyan-400">
      <figure>
        <img
          style={{ aspectRatio: "4/3" }}
          className="object-cover object-top"
          src={`/assets/${filename}`}
          alt={filename}
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{name}</h2>
        <p>{role}</p>
        <div className="card-actions">
          <button className="btn w-full btn-primary">{"Learn More"}</button>
          <div className="flex flex-wrap gap-[10px] prose justify-center gap-y-0">
            {tags?.map((tag) => (
              <Tag title={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
