import React from "react";
import "./Card.css";

const Card = (prompt) => {
  const { id, title, desc, img } = prompt;
  return (
    <div className="cards">
      <p>{title}</p>
      <img src={img} alt={id} />
      <span>{desc}</span>
    </div>
  );
};

export default Card;
