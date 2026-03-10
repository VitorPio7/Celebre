import Button2 from "./ui/button2";

interface LinkMyHeader {
  title: string;
  link: string;
}

interface MyHeader {
  logo: string;
  titleHead: LinkMyHeader[];
}

export default function Header({ logo, titleHead: title }: MyHeader) {
  return (
    <nav className="font-sans flex items-center justify-between h-12 px-6 lg:grid lg:grid-cols-2 lg:pl-16 lg:gap-10 lg:pt-4 lg:pr-2">
      
      <div className="flex gap-7">
        <p className="tracking-widest">
          {logo}
        </p>

        <ul className="hidden lg:flex gap-6">
          {title.map((el) => {
            return (
              <li key={el.title}>
                <a
                  href={el.link}
                  className="text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  {el.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden lg:block place-self-end pr-8">
        <Button2 description="Saiba mais" />
      </div>

    </nav>
  );
}