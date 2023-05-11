import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { WEATHER_TYPE } from '../constants/weather'


const Daycard = () => {

  const [weather, setWeather] = React.useState(null);

  useEffect(() => {
    axios
    .get('https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric')
    .then((response) => {
    console.log(response.data);
    })
    .catch((error) => {
    console.log(error);
    });
    }, []);

  return (
    <St.CardWrapper>
    <St.H1>도시명</St.H1>
    
    <St.Text>
    <p>온도</p>
    </St.Text>
    <St.Text>
    <p>체감 온도</p>
    </St.Text>
    <St.Text>
    <p>최저/최고</p>
    </St.Text>
    <St.Text>
    <p>구름</p>
    </St.Text>
    </St.CardWrapper>
  )
}

export default Daycard

const St = {

  CardWrapper: styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 4rem;
  width: 30rem;
  height: 40rem;

  
 
  background-color: ${({ theme }) => theme.colors.BackgroundBlue};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(142, 157, 244, 0.2);
`,

 H1: styled.h1`
  ${({ theme }) => theme.fonts.Content};
  color: ${({ theme }) => theme.colors.Blue};
  margin-bottom: 2rem;
`,

Text: styled.div`
  ${({ theme }) => theme.fonts.Content};
  color: ${({ theme }) => theme.colors.Black};
  margin-bottom: 2rem;
`,

}