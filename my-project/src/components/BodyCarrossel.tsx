import { BsMoonStars } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button2 from "./ui/button2";

export default function BodyCarrossel() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-0 py-0 gap-0">
      <img src="carrosel-fundo.png" className="w-[500px] " />
      <h1 className="text-4xl font-light ">
        Organize o seu espaço de forma criativa
      </h1>
      <p className="mbe-14 text-gray-600">
        Transforme seu ambiente em um espaço único e personalizadas.
      </p>
      <div className=" font-sans flex flex-row h-64 w-full gap-28 justify-center mb-14">
        <div className="flex flex-col items-center justify-center text-center max-w-80 px-0 py-0 gap-0">
          <BsMoonStars className="w-12 h-12 mb-5" />
          <p className="font-medium mb-1.5">Personalize o seu evento</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pharetra diam diam, a vehicula ex ultricies maximus. Cras in nibh in
            nunc dignissim fringilla vitae sit amet magna. Donec non
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center  max-w-80 px-0 py-0 gap-0">
          <IoLeafOutline className="w-12 h-12 mb-5" />
          <p className=" mb-1.5  font-medium">Personalize o seu evento</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pharetra diam diam, a vehicula ex ultricies maximus. Cras in nibh in
            nunc dignissim fringilla vitae sit amet magna. Donec non
          </p>
        </div>
        <div className="flex flex-col items-center  text-center max-w-80 px-0 py-0 gap-0">
          <HiOutlineLocationMarker className="w-12 h-12 mb-5" />
          <p className=" mb-1.5 font-medium">Personalize o seu evento</p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pharetra diam diam, a vehicula ex ultricies maximus. Cras in nibh in
            nunc dignissim fringilla vitae sit amet magna. Donec non
          </p>
        </div>
      </div>
      <Button2 description="Contato" />
    </div>
  );
}
