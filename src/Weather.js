import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
const [ready, setReady] = useState(false)  
const [weatherInfo, setWeatherInfo] = useState(null)

function showWeather(response) {
  console.log(response.data)
  setWeatherInfo({
    city: response.data.name,
    temp: response.data.main.temp,
    description: response.data.weather[0].main,
    tempMin:response.data.main.temp_min,
    tempMax:response.data.main.temp_max,
    icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  })
  setReady(true)
}
if (ready) {
  return (
    <div>
      <h1 id="city-heading">{weatherInfo.city}</h1>
      <h6 id="date">Wed, 20 May 2020 13:47</h6>
      <div className="weather-today shadow">
        <h2>
  <span id="temperature">{Math.round(weatherInfo.temp)}°</span>
          <a href="#" id="celsius" className="active units">
            C
          </a>
          |
          <a href="#" id="fahrenheit" className="units">
            F
          </a>
        </h2>
        <h3>
  <span id="current-weather-description">{weatherInfo.description}</span>
          <img
            src={weatherInfo.icon}
            alt="Weather Icon"
            id="current-weather-icon"
          />
        </h3>
        <h4>
  <span>{Math.round(weatherInfo.tempMin)}˚/</span>
  <span>{Math.round(weatherInfo.tempMax)}˚</span>
        </h4>
      </div>
    </div>
  );} else {
    let city = "Porto"
    const apiKey = "d3565a1a83ca66a70607e27406dc0152";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather)
return (
  <div> Loading... </div>
)  
  }
}
