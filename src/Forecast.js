import React, {useState} from "react";
import axios from "axios"
import "./Forecast.css"
import Loader from 'react-loader-spinner';
import ForecastHours from "./ForecastHours"
import ForecastWeather from "./ForecastWeather"

export default function Forecast(props) {

  const[forecastInfo, setForecastInfo] = useState(null)
  const[ready, setReady] = useState(false)

function callApi() {
  const apiKey = "d3565a1a83ca66a70607e27406dc0152";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast)}

function showForecast(response) {
  console.log(response.data)
  setForecastInfo(response.data)
  setReady(true)
}

if(ready && forecastInfo.city.name === props.city) {
  return (
    <div className="Forecast">
      <div className="row">
        {forecastInfo.list.slice(0, 5).map(function(forecastItem) {
          return <ForecastHours data={forecastItem}/>
        })}
      </div>
      <div className="line" />
      <div className="row">
      {forecastInfo.list.slice(0, 5).map(function(forecastItem) {
          return <ForecastWeather data={forecastItem}/>
        })}
        </div>
    </div>
  );} else {
    callApi()
    return <span className="loader">
    <Loader
           type="Puff"
           color="#FFF"
           height={70}
           width={70}
           timeout={3000}
   
      />
      </span>
  }
}
