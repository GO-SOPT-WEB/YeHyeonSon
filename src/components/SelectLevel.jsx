import React from 'react';
import styled from 'styled-components';

const Level = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
const LevelButton = styled.button`
  display: flex;
  justify-content: center;
  margin:1rem;
  background-color: rgb(255, 119, 171);
  color: white;
  `;

const SelectLevel = ({ handleLevelClick }) => {
  return (
    <Level>
      <LevelButton value="easy" onClick={() => handleLevelClick(5)}>
        Easy
      </LevelButton>
      <LevelButton className="level-button" value="medium" onClick={() => handleLevelClick(7)}>
        Medium
      </LevelButton>
      <LevelButton className="level-button" value="hard" onClick={() => handleLevelClick(9)}>
        Hard
      </LevelButton>
    </Level>
  );
};

export default SelectLevel;