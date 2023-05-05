import React from 'react';
import styled from 'styled-components';

const ResetButton = styled.button`

    position: absolute;
    top: 12%;
    left: 80%;
    font-size: 1.5rem;
    background-color: #181818;
    border: 0.1rem solid #07b05b;
    color: white;

`
const ResetGame = ({shuffleCards}) => {
    return (
    <ResetButton onClick={shuffleCards}>Reset</ResetButton>
    );
};


export default ResetGame;