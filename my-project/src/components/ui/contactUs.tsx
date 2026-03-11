export default function ContactUs() {
  return (
    <section>
      <h2>Tem alguma dúvida? contate um dos nossos atendentes.</h2>
      <form>
        <div className="flex  lg:flex-row">
          <label>
            Nome:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
        </div>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
