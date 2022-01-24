import React, { useEffect, useState } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherState, setWeatheState] = useState("");

    

   const {
    temp , humidity,pressure,weathermood,name,speed,country,sunset,
  } = tempInfo;


  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-day-haze");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-fog");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec=sunset;
  let date = new Date(sec*1000);
  let timestr= `${date.getHours()}: ${date.getMinutes()}`

  return (
    <>
      <article className='widget'>
      <div className="weatherIcon">
        <i className={`wi ${weatherState}`}></i>
      </div>

      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
        </div>
        <div className='description'>
          <div className="weatherCondition">{weathermood}</div>
          <div className="place">{name},{country}</div>
        </div>
      </div>
      
      <div className="date">{new Date().toLocaleString()}</div>

      <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p><i className={"wi wi-sunset"}></i></p>
            <p className="extra-info-leftside">{timestr} PM <br /> Sunset</p>
          </div>
          <div className="two-sided-section">
            <p><i className={"wi wi-humidity"}></i></p>
            <p className="extra-info-leftside">{humidity} % <br /> Humidity</p>
          </div>
        </div>

        <div className="weather-extra-info">
        <div className="two-sided-section">
            <p><i className={"wi wi-cloud-down"}></i></p>
            <p className="extra-info-leftside">{pressure} mb <br /> Pressure</p>
          </div>
          <div className="two-sided-section">
            <p><i className={"wi wi-strong-wind"}></i></p>
            <p className="extra-info-leftside">{speed} km/h <br /> Speed</p>
          </div>
        </div>
        
      </div>

    </article>
    </>
  )
}

export default Weathercard