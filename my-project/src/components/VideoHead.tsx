import Button2 from "./ui/button2";
export default function VideoHead() {
  return (
    <div className="relative ml h-[90vh] overflow-hidden">
      <video
        className=" p-3  absolute  inset-0 w-full h-5/6 object-cover brightness-75 lg:pl-9 lg:pr-9 lg:pt-9 z-0 "
        loop
        muted
        autoPlay
      >
        <source src="VideoCelebre.mp4" type="video/mp4" />
      </video>

      <div className=" absolute inset-0 flex  flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl  font-serif lg:text-5xl font-bold mb-4">
          Criamos a sua melhor lembrança!
        </h1>

        <p className=" max-w-3xl mb-6 font-sans">
          Crie a sua melhor lembrança com a Celebre! Com uma equipe dedicada e
          apaixonada, garantimos que sua celebração seja única e memorável.
          Deixe-nos cuidar de tudo para que você possa aproveitar cada instante
          com seus entes queridos. Celebre a vida com a Celebre!
        </p>

        <Button2 description="Fale conosco" />
      </div>
    </div>
  );
}
