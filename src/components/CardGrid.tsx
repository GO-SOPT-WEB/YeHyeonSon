import React from "react";
import SingleCard from "./SingleCard";
import styled from "styled-components";

interface Card {
  id: number;
  title: string;
  src: string;
  matched: boolean;
}

interface Props {
  cards: Card[];
  choiceOne: Card | null;
  choiceTwo: Card | null;
  handleChoice: (card: Card) => void;
  disabled: boolean;
}

const CardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 0.3rem;
  width: 90rem;
  margin-left: auto;
  margin-right: auto;
`;

const CardItem = styled.div`
  flex-basis: calc(100% / 6 -1rem);
`;

const CardGrid: React.FC<Props> = ({
  cards,
  choiceOne,
  choiceTwo,
  handleChoice,
  disabled,
}) => {
  return (
    <CardSection>
      {cards.map((card) => (
        <CardItem key={card.id}>
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        </CardItem>
      ))}
    </CardSection>
  );
};

export default CardGrid;
