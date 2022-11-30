import LargeTag from "../components/LargeTag";
import skills from "../data/skills";

export default function () {
  return (
    <div
      id={"skills"}
      className="w-full flex flex-col items-center justify-center prose gap-0"
    >
      <h2 className="m-0 text-white text-shadow">Skills</h2>
      <div className="flex flex-wrap justify-center self-start gap-2 [&>*]:m-1 prose px-3">
        {skills.map((skill, key) => (
          <LargeTag title={skill} key={key} />
        ))}
      </div>
    </div>
  );
}
