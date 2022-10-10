import React from "react";
import "./Card.css";

const Card = (prompt) => {
  const { id, title, desc, image } = prompt;
  return (
    <div className="cards">
      <p>{title}</p>
      <img src={image} alt={id} />
      <span>{desc}</span>
    </div>
  );
};

export default Card;
