import LargeTag from "../components/LargeTag";
import skills from "../data/skills";

export default function () {
  return (
    <>
      <div className="w-full flex justify-center prose m-auto">
        <h2 id={"skills"} className="text-white text-shadow">
          Skills
        </h2>
      </div>
      <div className="m-auto mt-4 flex flex-wrap justify-center self-start gap-2 [&>*]:m-1 prose px-3">
        {skills.map((skill, key) => (
          <LargeTag title={skill} key={key} />
        ))}
      </div>
    </>
  );
}
