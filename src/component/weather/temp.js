import React, { useEffect, useState } from 'react';
import "./style.css";
import Weathercard from './weathercard';

const Temp = () => {
  const [searchValue, setSearchValue] = useState("kolkata");
  const [tempInfo, settempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=a853480222198cd65866f0ceff36261f`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherinfo = {
        temp, humidity, pressure, weathermood, name, speed, country, sunset,
      };

      settempInfo(myNewWeatherinfo);

    } catch (error) {
      console.error();
    }
  };
 
  useEffect(() => {
    getWeatherInfo();
  },[] );/*->*/
  return <>
    <div className="wrap">
      <div className="search">
        <input type="search"
          placeholder='enter the name of city...'
          autoFocus
          id='search'
          className='searchTerm'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="searchButton" type='button' onClick={getWeatherInfo}>
          Search
        </button>
      </div>
    </div>
    <Weathercard tempInfo={tempInfo} />
  </>;
}

export default Temp
