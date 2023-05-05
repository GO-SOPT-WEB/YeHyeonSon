import React from 'react';
import SingleCard from './SingleCard';
import styled from 'styled-components';

const CardSection = styled.section`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    position: relative;
    place-content: center;
    place-items: center;
    `;

const CardGrid = ({ cards, choiceOne, choiceTwo, handleChoice, disabled }) => {
    return (
      <CardSection>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
        </CardSection>
    );
  };
  
  export default CardGrid;
