export default function BodyGallery() {
    return (
      <div className="p-9">
        <div>
          <h1 className="text-4xl">Encontre a celebração perfeita para o seu momento</h1>
          <p className="text-gray-600 font-sans mt-4 max-w-[480px]">
            Seja aniversário, casamento ou evento especial, temos a festa ideal
            para cada ocasião.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4"></div>
      </div>
    );
}