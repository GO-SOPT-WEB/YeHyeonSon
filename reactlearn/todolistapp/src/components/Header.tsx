import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrpper>
      <h3>오늘은 📆</h3>
      <HeaderDate>{new Date().toDateString()}</HeaderDate>
    </HeaderWrpper>
  );
};

export default Header;

const HeaderDate = styled.h1`
  margin-bottom: 0rem;
  color: ${({ theme }) => theme.colors.Blue};
`;

const HeaderWrpper = styled.div`
  ${({ theme }) => theme.fonts.SubTitle};
`;
