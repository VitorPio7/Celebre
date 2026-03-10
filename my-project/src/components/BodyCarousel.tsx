import { BsMoonStars } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button2 from "./ui/button2";

export default function BodyCarrossel() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-0 py-0 gap-0">
      <img src="carrosel-fundo.png" className="w-2xs  lg:w-125" />
      <h1 className=" text-2xl max-w-lg lg:text-4xl font-light ">
        Organize o seu espaço de forma criativa
      </h1>
      <p className="mbe-14 max-w-2/3 text-gray-600">
        Transforme seu ambiente em um espaço único e personalizadas.
      </p>
      <div className=" font-sans flex flex-col items-center lg:flex-row lg:h-64 w-full gap-24 lg:gap-28 justify-center mb-14">
        <div className="flex flex-col items-center justify-center text-center max-w-80 px-0 py-0 gap-0">
          <BsMoonStars className="w-10 lg:w-12 h-12 mb-5" />
          <p className="font font-medium mb-1.5">Personalize o seu evento</p>
          <p className="text-gray-600">
            Planeje cada detalhe da sua festa com nossa equipe especializada.
            Criamos experiências únicas que transformam momentos especiais em
            lembranças inesquecíveis.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center  max-w-80 px-0 py-0 gap-0">
          <IoLeafOutline className="w-10 lg:w-12 h-12 mb-5" />
          <p className=" mb-1.5  font-medium">Personalize o seu evento</p>
          <p className="text-gray-600">
            Cuidamos de toda a organização do seu evento com dedicação e
            criatividade. Do planejamento à execução, garantimos uma festa
            elegante e memorável.
          </p>
        </div>
        <div className="flex flex-col items-center  text-center max-w-80 px-0 py-0 gap-0">
          <HiOutlineLocationMarker className="w-10 lg:w-12 h-12 mb-5" />
          <p className=" mb-1.5 font-medium">Personalize o seu evento</p>
          <p className="text-gray-600">
            Realizamos eventos em diferentes espaços e ambientes. Nossa equipe
            adapta cada detalhe para criar uma experiência perfeita para você e
            seus convidados.
          </p>
        </div>
      </div>
      <Button2 description="Contato" />
    </div>
  );
}
