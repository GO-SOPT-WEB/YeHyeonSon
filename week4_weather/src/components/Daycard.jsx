import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { WEATHER_TYPE } from "../constants/weather";

const Daycard = () => {
  const { area } = useParams();
  const [weather, setWeather] = useState({});
  const imgURL =
    WEATHER_TYPE.filter(
      (item) => item.description === weather.weather?.[0].description
    )[0]?.imgURL || WEATHER_TYPE[0].imgURL;

  console.log(imgURL);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
          import.meta.env.VITE_APP_WEATHER
        }&units=metric`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [area]);

  return (
    <St.CardWrapper>
      {imgURL && (
        <St.CardImg
          src={imgURL}
          alt={weather.weather?.[0].description || "weather"}
        />
      )}
      <St.H1>{weather.name}</St.H1>
      <St.Text>
        <p>온도: </p>
        <p>{weather.main?.temp}</p>
      </St.Text>
      <St.Text>
        <p>체감 온도:</p>
        <p>{weather.main?.feels_like}</p>
      </St.Text>
      <St.Text>
        <p>최저/최고:</p>
        <p>
          {" "}
          {weather.main?.temp_min} / {weather.main?.temp_max}
        </p>
      </St.Text>
      <St.Text>
        <p>구름: </p>
        <p>{weather.clouds?.all} %</p>
      </St.Text>
    </St.CardWrapper>
  );
};

export default Daycard;

const St = {
  CardWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 4rem;
    padding: 2rem;
    width: 30rem;
    height: 40rem;

    background-color: ${({ theme }) => theme.colors.BackgroundBlue};
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(142, 157, 244, 0.2);
  `,
  CardImg: styled.img`
    width: 15rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  `,

  H1: styled.h1`
    ${({ theme }) => theme.fonts.Content};
    color: ${({ theme }) => theme.colors.Blue};
    margin-bottom: 3rem;
  `,

  Text: styled.div`
    ${({ theme }) => theme.fonts.Content};
    color: ${({ theme }) => theme.colors.Black};
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;
    width: 100%;

    margin-left: 3rem;
    padding: 0 1.1rem;
    gap: 1rem;
    & > p {
      flex: 1;
      margin: 0;
      align-items: center;
    }
  `,
};
