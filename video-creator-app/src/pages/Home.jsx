import React from 'react';
import Card from './Card'; // Importando o componente Card
import '../styles/Home.css'; // CSS específico para a Home

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
        <Card
          bgColor="#F1C2B0"
          title="Youtube"
          icon="/src/assets/icons/youtube.png"
          number="01"
          description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
        />

        <Card
          bgColor="#F9EB98"
          title="Tiktok"
          icon="/src/assets/icons/tiktok.png"
          number="02"
          description="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
        />

        <Card
          bgColor="#C0D9DD"
          title="Facebook"
          icon="/src/assets/icons/facebook.png"
          number="03"
          description="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
        />

        <Card
          bgColor="#6975E8"
          title="Instagram"
          icon="/src/assets/icons/instagram-card.png"
          number="04"
          description="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
        />
      </div>
    </div>
  );
};

export default Home;
