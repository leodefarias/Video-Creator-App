import React from 'react';
import '../styles/card.css';

function Card({ bgColor, title, icon, number, description }) {
  const cardStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={icon} alt={title} className="card-icon" />
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
