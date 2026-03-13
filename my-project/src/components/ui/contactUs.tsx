export default function ContactUs() {
  return (
    <div className="bg-gray-100 p-6 rounded-md max-w-[400px]">
      <h1 className="font-serif text-4xl mb-4">Vamos conectar</h1>
      <h2 className="mb-4 text-gray-500">
        Tem alguma dúvida? contate um dos nossos atendentes. Adorariámos ajudar!
      </h2>
      <form className="flex  flex-col gap-3">
        <div>
          <label className="block" htmlFor="name">
            Nome:
          </label>
          <input
            className="border w-90  border-gray-300 p-2 rounded-md"
            type="text"
            placeholder="Jane Smith"
            name="name"
            required
          />
        </div>
        <div>
          <label className="block" htmlFor="email">
            Email:
          </label>
          <input
            className="border w-90  border-gray-300 p-2 rounded-md"
            type="email"
            placeholder="jane.smith@example.com"
            name="email"
            required
          />
        </div>
        <div>
          <label className="block" htmlFor="message">
            Mensagem:
          </label>
          <textarea
            className="border max-w-90 w-90 h-40 border-gray-300 p-2 rounded-md"
            placeholder="Escreva sua mensagem aqui..."
            name="message"
            required
          ></textarea>
        </div>
        <button
          className="w-90 bg-button-green text-white h-12 rounded-4xl cursor-pointer"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
