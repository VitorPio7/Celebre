interface LinkMyHeader{
  title: string,
  link: string
}
interface MyHeader {
  logo: string;
  titleHead: LinkMyHeader[];
}

export default function Header({ logo, titleHead: title }: MyHeader) {
  return (
    <nav className="grid grid-cols-2 items-center h-12 pl-16 gap-10 pt-4 pr-2 ">
      <div className="flex gap-7 ">
        <p className="tracking-widest   basi justify-center justify-items-center items-center  ">
          {logo}
        </p>
        <ul className="flex gap-6 ">
          {title.map((el) => {
            return (
              <li key={el.title}>
                <a
                  href={el.link}
                  className="text-gray-500 items-start hover:text-gray-900 transition-colors text-sm font-medium "
                >
                  {el.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="place-self-end pr-8">
        <button className=" bg-button-green w-32 text-center  items-center left h-12 rounded-full  text-white ">
          {" "}
          Saiba mais
        </button>
      </div>
    </nav>
  );
}