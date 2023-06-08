import React from "react";
import styled from "styled-components";

interface ResetGameProps {
  shuffleCards: () => void;
}

const ResetButton = styled.button`
  position: absolute;
  top: 12%;
  left: 80%;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.5rem;
  background-color: #181818;
  border: 0.1rem solid ${(props) => props.theme.secondaryColor};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;
const ResetGame = ({ shuffleCards }: ResetGameProps) => {
  return <ResetButton onClick={shuffleCards}>Reset</ResetButton>;
};

export default ResetGame;
