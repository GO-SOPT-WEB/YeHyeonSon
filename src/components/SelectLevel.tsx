import React from "react";
import styled from "styled-components";

interface SelectLevelProps {
  handleLevelClick: (level: number) => void;
}

const Level = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;
const LevelButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 1rem;
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};

  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

const SelectLevel = ({ handleLevelClick }: SelectLevelProps) => {
  return (
    <Level>
      <LevelButton value="easy" onClick={() => handleLevelClick(5)}>
        Easy
      </LevelButton>
      <LevelButton
        className="level-button"
        value="medium"
        onClick={() => handleLevelClick(7)}
      >
        Medium
      </LevelButton>
      <LevelButton
        className="level-button"
        value="hard"
        onClick={() => handleLevelClick(9)}
      >
        Hard
      </LevelButton>
    </Level>
  );
};

export default SelectLevel;
