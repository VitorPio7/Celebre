export default function VideoHead() {
  return (
    <div className="relative  rounded-4xl ml h-[90vh] overflow-hidden ">
      <video
        className=" absolute inset-0 w-full h-5/6 object-cover brightness-75 p-9 radius"
        loop
        muted
        autoPlay
      >
        <source src="videoAniversário.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex  flex-col items-center justify-center text-white text-center px-4">
        <h1 className="font-serif text-5xl font-bold mb-4">
          Criamos a sua melhor lembrança!
        </h1>

        <p className="max-w-3xl mb-6">
          Crie a sua melhor lembrança com a Celebre! Com uma equipe dedicada e
          apaixonada, garantimos que sua celebração seja única e memorável.
          Deixe-nos cuidar de tudo para que você possa aproveitar cada instante
          com seus entes queridos. Celebre a vida com a Celebre!
        </p>

        <button className="cursor-pointer bg-button-green w-40 h-12 rounded-full">
          Fale conosco
        </button>
      </div>
    </div>
  );
}
