interface TagProps {
  title: string;
}
export default function ({ title }: TagProps) {
  return <p className="flex-grow-0 text-white">#{title}</p>;
}
