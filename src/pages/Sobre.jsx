import '../styles/Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="text-and-images">
        <div className="text-section">
          <h1>Bem-vindo à revolução dos vídeos!</h1>
          <p>
            Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.
          </p>
          <button className="primary-button">Baixe o app</button>
        </div>

        <div className="image-section">
          <div className="image" style={{ backgroundImage: "url('sobre-image1.png')" }}></div>
          <div className="image" style={{ backgroundImage: "url('sobre-image2.png')" }}></div>
        </div>
      </div>

      <div className="planos-section">
        <h2>Planos</h2>
        <div className="planos-content">
          {/* Plano Individual */}
          <div className="plano individual">
            <div className="header">Individual</div>
            <div className="content">
              <p className="usuario">1 Usuário</p>
              <div className="dropdown">
                <select>
                  <option>10 Vídeos R$15</option>
                  <option>20 Vídeos R$25</option>
                  <option>30 Vídeos R$35</option>
                </select>
              </div>
            </div>
            <div className="button-container">
              <button className="button">Cadastrar</button>
            </div>
          </div>

          {/* Plano Profissional - Times */}
          <div className="plano profissional">
            <div className="header">Profissional - Times</div>
            <div className="content">
              <p className="usuario">1-10 Usuários</p>
              <div className="dropdown">
                <select>
                  <option>Vídeos Ilimitados R$40</option>
                  <option>Vídeos Ilimitados R$60</option>
                  <option>Vídeos Ilimitados R$80</option>
                </select>
              </div>
              <p className="usuario">+10 Usuários</p>
              <div className="dropdown">
                <select>
                  <option>Vídeos Ilimitados R$20</option>
                  <option>Vídeos Ilimitados R$30</option>
                  <option>Vídeos Ilimitados R$40</option>
                </select>
              </div>
            </div>
            <div className="button-container">
              <button className="button">Cadastrar</button>
            </div>
          </div>

          {/* Plano Corporativo */}
          <div className="plano corporativo">
            <div className="header">Corporativo</div>
            <div className="content">
              <img src="desenho-pessoa-celular.png" alt="Desenho de uma pessoa ao lado de um celular" className="corporativo-image" />
            </div>
            <div className="button-container">
              <button className="button">Entrar Em Contato</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
