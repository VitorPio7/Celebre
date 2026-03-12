import CardOverview from "./ui/cardOverview";
export default function BodyGallery() {
    return (
      <section className="p-9">
        <div>
          <h1 className="text-4xl">Encontre a celebração perfeita para o seu momento</h1>
          <p className="text-gray-600 font-sans mt-4 max-w-[480px] mb-8">
            Seja aniversário, casamento ou evento especial, temos a festa ideal
            para cada ocasião.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <CardOverview
            img="image12.jpeg"
            title="Aniversário"
            description="Celebre seu aniversário em grande estilo."
          />
          <CardOverview
            img="image2.jpeg"
            title="Casamento"
            description="O casamento dos seus sonhos começa aqui conosco."
          />
          <CardOverview
            img="image3.jpeg"
            title="Formatura"
            description="Comemore sua formatura com uma festa inesquecível."
          />
          <CardOverview
            img="image4.jpeg"
            title="Evento Corporativo"
            description="Realize seu evento corporativo com excelência."
          />
        </div>
      </section>
    );
}