import React from "react";

const Card = ({ card }) => {
  return <img src={card.assets[0].gameAbsolutePath} alt="Card" />;
};

export default Card;
