import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <St.HeaderWrapper>
      <h1>🌈예손의 날씨예보🌈</h1>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 12rem;
    padding: 2rem;

    background-color: ${({ theme }) => theme.colors.Blue};

    & > h1 {
      ${({ theme }) => theme.fonts.Title};
      color: ${({ theme }) => theme.colors.White};
      cursor: pointer;
    }
  `,
};