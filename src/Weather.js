import React from "react";
import "./Weather.css";
import Units from "./Units"

export default function Weather(props) {

  return (
    <div>
      <h1 id="city-heading">{props.data.city}</h1>
      <h6 id="date">Wed, 20 May 2020 13:47</h6>
      <div className="weather-today shadow">
        <h2>  
       <Units celsius={props.data.temp}/>
        </h2>
        <h3>
  <span id="current-weather-description">{props.data.description}</span>
          <img
            src={props.data.icon}
            alt="Weather Icon"
            id="current-weather-icon"
          />
        </h3>
        <h4>
  <span>{Math.round(props.data.tempMin)}˚/</span>
  <span>{Math.round(props.data.tempMax)}˚</span>
        </h4>
      </div>
    </div>
  )
}
