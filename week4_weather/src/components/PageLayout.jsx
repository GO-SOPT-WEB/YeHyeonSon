import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import SearchForecast from './SearchForecast';



const PageLayout = (props) => {
  const { children } = props;

  return (
   <St.Wrapper>
    <Header/>
    <SearchForecast/>
    <St.ChildWrapper>
      {children}
    </St.ChildWrapper>
   </St.Wrapper> 
  )
}

export default PageLayout;

const St = {
    Wrapper : styled.section`
        background-color:${({ theme }) => theme.colors.backgroundBlue};
        width:100vw;
        height:100%;
    `,
    ChildWrapper : styled.main`
      display:flex;
      justify-content:center;
    `
}