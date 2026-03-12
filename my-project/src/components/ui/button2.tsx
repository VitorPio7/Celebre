interface Button2Props {
  description: string;
}
export default function Button2({ description }: Button2Props) {
  return (
    <button className="transition-all delay-150 duration-300 ease-in-out cursor-pointer hover:brightness-75 bg-button-green w-32 text-center  items-center left h-12 rounded-full  text-white ">
      {" "}
      {description}
    </button>
  );
}
