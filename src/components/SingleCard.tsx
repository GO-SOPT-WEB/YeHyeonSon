import "./SingleCard.css";
import React from "react";
import Card from "../type/Card";

interface SingleCardProps {
  card: Card;
  handleChoice: (card: Card | null) => void;
  flipped: boolean;
  disabled: boolean;
}

function SingleCard({
  card,
  handleChoice,
  flipped,
  disabled,
}: SingleCardProps) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="./src/img/cover.svg"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default SingleCard;
