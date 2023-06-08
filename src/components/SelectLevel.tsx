import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { gameLevelAtom } from "../atoms/gameLevel";

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
  const [gameLevel, setGameLevel] = useRecoilState(gameLevelAtom);

  const handleLevelButtonClick = (level: number) => {
    handleLevelClick(level);
    setGameLevel("easy");
  };

  return (
    <Level>
      <LevelButton value="easy" onClick={() => handleLevelButtonClick(5)}>
        Easy
      </LevelButton>
      <LevelButton
        className="level-button"
        value="normal"
        onClick={() => handleLevelButtonClick(7)}
      >
        Normal
      </LevelButton>
      <LevelButton
        className="level-button"
        value="hard"
        onClick={() => handleLevelButtonClick(9)}
      >
        Hard
      </LevelButton>
    </Level>
  );
};

export default SelectLevel;
