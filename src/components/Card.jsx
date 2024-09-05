import '../styles/card.css';

function Card({ bgColor, title, icon, number, description }) {
  const cardStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card-content">
        <div className="number">{number}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <img src={icon} alt={`${title} Icon`} className="icon" />
    </div>
  );
}

export default Card;
