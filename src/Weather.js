import React,{useState} from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import Loader from 'react-loader-spinner';

export default function Weather(props) {
  const [city, setCity] = useState(props.city)
  const [ready, setReady] = useState(false)  
  const [weatherInfo, setWeatherInfo] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleChange(event) {
    event.preventDefault()
   setCity(event.target.value)
  }

  function search() {
    const apiKey = "d3565a1a83ca66a70607e27406dc0152";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather)
  }
  
  function showWeather(response) {
    console.log(response.data)
    setWeatherInfo({
      city: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      tempMin:response.data.main.temp_min,
      tempMax:response.data.main.temp_max,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt*1000)
    })
    setReady(true)
  }
if (ready) {
  return (
    <div>
      <form id="search-city-form" onSubmit={handleSubmit}>
        <input
          type="search"
          id="enter-city"
          placeholder="Enter city name"
          className="shadow-sm"
          autoComplete="off"
          onChange={handleChange}
        />
        <input
          type="submit"
          id="search_city"
          value="Search"
          className="shadow-sm"
        />
      </form>
      <WeatherData data={weatherInfo}/>
    </div>
  )} else {
   search()
return (
  <span className="loader">
  <Loader
         type="Puff"
         color="#FFF"
         height={70}
         width={70}
         timeout={3000}
 
    />
    </span>
)  
}
}
