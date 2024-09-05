import '../styles/Contato.css'; // Certifique-se de que o caminho do arquivo CSS esteja correto

function Contato() {
  return (
    <div className="contato-section">
      <div className="contato-content">
        {/* Primeira Div: Textos e Ícones Sociais */}
        <div className="contato-left">
          <div className="text-section">
            <h2>Dúvidas e suporte, entre em contato:</h2>
          </div>
          <div className="social-icons">
            <img src={'twitter.png'} alt="Twitter" />
            <img src={'instagram-contact.png'} alt="Instagram" />
            <img src={'discord.png'} alt="Discord" />
          </div>
        </div>

        {/* Segunda Div: Formulário de Contato */}
        <div className="contato-right">
          <form>
            <label>
              Nome:   
              <input type="text" name="name" />
            </label>
            <label>
              E-mail:
              <input type="email" name="email" />
            </label>
            <label>
              Mensagem:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
