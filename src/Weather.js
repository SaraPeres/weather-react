import React from "react";
import "./Weather.css";
import Units from "./Units"
import Date from "./Date"
import WeatherIcon from "./WeatherIcon"

export default function Weather(props) {

  return (
    <div>
      <h1 id="city-heading">{props.data.city}</h1>
      <Date currentDate={props.data.date}/>
      <div className="weather-today shadow">
        <h2>  
       <Units celsius={props.data.temp}/>
        </h2>
        <h3>
  <span id="current-weather-description">{props.data.description}</span>
          <WeatherIcon code={props.data.icon} />
        </h3>
        <h4>
  <span>{Math.round(props.data.tempMin)}˚/</span>
  <span>{Math.round(props.data.tempMax)}˚</span>
        </h4>
      </div>
    </div>
  )
}
