import { CarouselTransition } from "./CarouselTransition";
import { BsMoonStars } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function BodyCarrossel() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-0 py-0 gap-0">
      <h1 className="text-3xl font-bold ">
        Organize o seu espaço de forma criativa
      </h1>
      <p>Transforme seu ambiente em um espaço único e personalizadas.</p>
      <CarouselTransition />
      <div className="flex flex-row h-64 w-full justify-around">
        <div className="flex flex-col items-center justify-center text-center px-0 py-0 gap-0">
          <BsMoonStars />
          <p>Personalize o seu evento</p>
          <p>personalize o seu evento com luzes e cores</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-0 py-0 gap-0">
          <IoLeafOutline />
          <p>Personalize o seu evento</p>
          <p>personalize o seu evento com luzes e cores</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-0 py-0 gap-0">
          <HiOutlineLocationMarker />
          <p>Personalize o seu evento</p>
          <p>personalize o seu evento com luzes e cores</p>
        </div>
      </div>
    </div>
  );
}
