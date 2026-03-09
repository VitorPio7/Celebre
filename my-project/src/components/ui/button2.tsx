interface Button2Props {
  description: string;
}
export default function Button2({description}: Button2Props) {
  return <button className="cursor-pointer bg-button-green w-32 text-center  items-center left h-12 rounded-full  text-white ">
    {" "}
    {description}
  </button>;
}
