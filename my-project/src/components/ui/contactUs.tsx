export default function ContactUs() {
  return (
    <div className="bg-gray-100 p-6 rounded-md">
      <h1 className="font-serif text-4xl mb-4">Vamos conectar</h1>
      <h2>Tem alguma dúvida? contate um dos nossos atendentes.</h2>
      <form>
        <div className="flex  flex-col md:flex-row lg:flex-row">
          <label className="block">
            Nome:
            <input type="text" placeholder="Jane Smith" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" placeholder="jane.smith@example.com" name="email" required />
          </label>
        </div>
        <label>
          Mensagem:
          <textarea placeholder="Escreva sua mensagem aqui..." name="message" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
