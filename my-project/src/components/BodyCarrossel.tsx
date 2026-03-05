import { CarouselTransition } from "./CarouselTransition";
export default function BodyCarrossel() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-0 py-0 gap-0">
      <h1 className="text-3xl font-bold ">
        Organize o seu espaço de forma criativa
      </h1>
      <p>Transforme seu ambiente em um espaço único e personalizadas.</p>
      <CarouselTransition />
      <div></div>
    </div>
  );
}
