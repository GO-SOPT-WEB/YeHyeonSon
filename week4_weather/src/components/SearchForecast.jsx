import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const SearchForecast = () => {
  const [area, setArea] = useState('');
  const [option, setOption] = useState('day'); // ['day', 'week']
  const navigate = useNavigate();

  const handleSelect = (e) => {
    setOption(e.target.value);
    };

  const handleChange = (e) => {
    setArea(e.target.value);
    };
  
  const handleClick = () => {
        navigate(`/${option}/${area}`);
    };

  return (
    <St.SearchBar>
    <St.ComboBox>
    <select onChange={handleSelect}>
			<option key="day" value="일간">
				오늘
			</option>
			<option key="week" value="주간">주간</option>
		</select>
    </St.ComboBox>
    <St.Input 
    input type="text" placeholder="영어로 도시명(ex. seoul)"
    onChange={handleChange}
    />
    <St.Button 
    button type="button" onClick={handleClick}>날씨 검색
    </St.Button>

    </St.SearchBar>
	);
}

export default SearchForecast

const St = {
  SearchBar : styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 2rem;

  `,
  ComboBox: styled.div`
    & > select {
      ${({ theme }) => theme.fonts.Content};
      color: ${({ theme }) => theme.colors.Blue};
      
      border: 0.2rem solid ${({ theme }) => theme.colors.Blue};
      border-radius: 0.5rem;
      padding: 0.5rem;

      :hover {
        background-color: ${({ theme }) => theme.colors.Blue};
        color: ${({ theme }) => theme.colors.White};
    } 
}
  `,
  Input: styled.input`
    width: 50rem;
    height: 8rem;

    ${({ theme }) => theme.fonts.Content};
    color: ${({ theme }) => theme.colors.Blue};
    border: none;
    background-color: ${({ theme }) => theme.colors.InputBlue};
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin-left: 1rem;
`,
  Button: styled.button`
    width: 17rem;
    height: 7rem;
    ${({ theme }) => theme.fonts.Content};
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.Blue};
    border: 0.2rem solid ${({ theme }) => theme.colors.Blue};
    border-radius: 4rem;
    padding: 2rem;
    margin-left: 1rem;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.White};
      color: ${({ theme }) => theme.colors.Blue};
  }
    `,
}