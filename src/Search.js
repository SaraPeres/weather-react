import React,{useState} from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search(props) {
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
      <form id="search-city-form">
        <input
          type="search"
          id="enter-city"
          placeholder="Enter city name"
          className="shadow-sm"
          autoComplete="off"
        />
        <input
          type="submit"
          id="search_city"
          value="Search"
          className="shadow-sm"
        />
      </form>
      <Weather data={weatherInfo}/>
    </div>
  )} else {
    const apiKey = "d3565a1a83ca66a70607e27406dc0152";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather)
return (
  <div> Loading... </div>
)  
}
}
