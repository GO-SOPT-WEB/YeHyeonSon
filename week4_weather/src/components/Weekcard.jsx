import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { WEATHER_TYPE } from '../constants/weather'


const Weekcard = () => {

    const { area } = useParams();
    const [weather, setWeather] = useState([]);
    const imgURL = 
    WEATHER_TYPE.filter(
        item => 
        item.description === weather.weather?.[0].description
        )[0]?.imgURL || WEATHER_TYPE[0].imgURL;


    console.log(imgURL)

    useEffect(() => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data.list);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [area]);
    
    const weatherList = weather.filter((_, index) => (index - 2) % 8 === 0);
    
    return (
        <St.Container>
        {weatherList.map((item, index) => (
          <St.CardWrapper key={index}>
            <St.H1>
            {new Date(item.dt_txt).toLocaleDateString()}
            </St.H1>
            {imgURL && <img src={imgURL} alt={item.weather?.[0].description || "weather"}/>}
        <St.H1>{item.city?.name}</St.H1>
        <St.Text>
          <p>온도: {item.main?.temp} ℃</p>
        </St.Text>
        <St.Text>
          <p>체감 온도: {item.main?.feels_like} ℃</p>
        </St.Text>
        <St.Text>
          <p>최저/최고: {item.main?.temp_min} ℃ / {item.main?.temp_max} ℃</p>
        </St.Text>
        <St.Text>
          <p>구름: {item.clouds?.all} %</p>
        </St.Text>
      </St.CardWrapper>
    ))}
    </St.Container>
    )
  }
  
  export default Weekcard;

  const St = {
    Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  `,

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