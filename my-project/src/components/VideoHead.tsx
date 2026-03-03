export default function VideoHead() {
  return (
    <div className="flex w-full  mt-11 object-fill justify-center ">
      <video
        className="items-center w-11/12 max-h-3/4 h-4/5 fixed bor rounded-[20px] z-[-1] object-cover brightness-80"
        loop
        muted
        autoPlay
      >
        <source src="videoAniversário.mp4" type="video/mp4" />
      </video>
      <div className=" text-white flex flex-col h-4/5  items-center justify-self-center mt-10">
        <h1 className="font-serif text-5xl p-4 font-bold">
          Criamos a sua melhor lembrança!
        </h1>
        <p className="p-3.5 weight-normal text-center max-w-5xl">
          Crie a sua melhor lembrança com a Celebre! Com uma equipe dedicada e
          apaixonada, garantimos que sua celebração seja única e memorável.
          Deixe-nos cuidar de tudo para que você possa aproveitar cada instante
          com seus entes queridos. Celebre a vida com a Celebre!
        </p>
      </div>
    </div>
  );
}
