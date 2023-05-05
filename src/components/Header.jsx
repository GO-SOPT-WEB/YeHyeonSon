import React, { memo, useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 12rem;
  margin: 0;
  padding-top: 0.1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #fff;
`;

const glowAnimation = keyframes`
  from {
    color: pink;
    text-shadow: 0 0 10px pink;
  }
  to {
    color: white;
    text-shadow: none;
  }
`;

const MatchedCountWrapper = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: pink;
  animation: ${({ matchedCount }) => matchedCount && css`${glowAnimation} 1s ease-in-out`};
`;

const MemoMatchedCount = memo(({ matchedCount, cards }) => {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    setKey(key => key + 1);
  }, [matchedCount]);
  
  const glow = matchedCount > 0;
  return (
    <MatchedCountWrapper key={key} matchedCount={matchedCount}>
      {matchedCount / 2} / {cards.length / 2}
    </MatchedCountWrapper>
  );
});

const Header = ({ matchedCount, cards }) => {
  return (
    <HeaderWrapper>
      <Title>💼팩깅이를 맞춰라!💼</Title>
      <MemoMatchedCount matchedCount={matchedCount} cards={cards} />
    </HeaderWrapper>
  );
};

export default Header;