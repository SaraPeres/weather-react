import React from "react";

export default function Weather() {
  return (
    <div>
      <h1 id="city-heading">Porto</h1>
      <h6 id="date">Wed, 20 May 2020 13:47</h6>
      <div className="weather-today shadow">
        <h2>
          <span id="temperature">18°</span>
          <a href="#" id="celsius" className="active units">
            C
          </a>
          |
          <a href="#" id="fahrenheit" className="units">
            F
          </a>
        </h2>
        <h3>
          <span id="current-weather-description">Clouds</span>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="Weather Icon"
            id="current-weather-icon"
          />
        </h3>
        <h4>
          <span id="current-min-temp">15˚</span>
          <span id="current-max-temp">20˚</span>
        </h4>
      </div>
    </div>
  );
}
