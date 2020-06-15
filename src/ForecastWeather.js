import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function ForecastWeather(props) {

    return (<div className="col">
    <div className="next-hours-icons"><WeatherIcon code={props.data.weather[0].icon} size={35}/></div>
    <div className="next-hours-temp">{Math.round(props.data.main.temp_min)}˚/{Math.round(props.data.main.temp_max)}˚C</div>
    </div>)
}