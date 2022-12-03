interface Props {
  title: string;
}
export default function ({ title }: Props) {
  return (
    <div className="flex gap-[2px] items-center [&>*]:m-0  skill-glow">
      <h2 className="text-[#fff6a4] bg-clip-text bg-gradient-to-r from-[#62ffea] to-[#53dd58] font-extrabold">
        #
      </h2>
      <h3 className="text-white">{title}</h3>
    </div>
  );
}
