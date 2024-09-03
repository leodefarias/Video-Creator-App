import React from 'react';
import '../styles/Home.css'; // Importa o CSS para a página Home
import '../styles/card.css'; // Importa o CSS específico dos cards

const Home = () => {
  return (
    <div className="container">

      <div className="home-banner position-relative">
        <div>
          <h1>Crie seus vídeos online</h1>
          <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
          <a href="#start" className="primary-button">Começar agora!</a>
        </div>
        <div className="image-container">
          <img src="/src/assets/images/home-image.png" alt="Hero" className="hero-image" />
        </div>
      </div>

      <div className="cards-container">
        <div className="card" style={{ backgroundColor: '#F1C2B0' }}>
          <div className="card-content">
            <div className="number">01</div>
            <div className="title">Youtube</div>
            <div className="description">
              Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.
            </div>
          </div>
          <img className="icon" src="/src/assets/icons/youtube.png" alt="Youtube Icon" />
        </div>

        <div className="card" style={{ backgroundColor: '#F9EB98' }}>
          <div className="card-content">
            <div className="number">02</div>
            <div className="title">Tiktok</div>
            <div className="description">
              Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.
            </div>
          </div>
          <img className="icon" src="/src/assets/icons/tiktok.png" alt="Tiktok Icon" />
        </div>

        <div className="card" style={{ backgroundColor: '#C0D9DD' }}>
          <div className="card-content">
            <div className="number">03</div>
            <div className="title">Facebook</div>
            <div className="description">
              Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.
            </div>
          </div>
          <img className="icon" src="/src/assets/icons/facebook.png" alt="Facebook Icon" />
        </div>

        <div className="card" style={{ backgroundColor: '#6975E8' }}>
          <div className="card-content">
            <div className="number">04</div>
            <div className="title">Instagram</div>
            <div className="description">
              Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.
            </div>
          </div>
          <img className="icon" src="/src/assets/icons/instagram-card.png" alt="Instagram Icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
