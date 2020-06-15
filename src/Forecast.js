import React from "react";
import "./Forecast.css"
import axios from "axios"

export default function Forecast(props) {

  const apiKey = "d3565a1a83ca66a70607e27406dc0152";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

  return (
    <div id="forecast">
      <div className="row" id="forecast-time" />
      <div className="line" />
      <div className="row" id="forecast-weather-icons" />
      <div className="row" id="forecast-weather-temp" />
    </div>
  );
}
