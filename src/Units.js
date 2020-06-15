import React, {useState} from "react"

export default function Units(props) {
  const [temp, setTemp] = useState("celsius")  

    function tempFahrenheit(event) {
        event.preventDefault()
       setTemp("fahrenheit")
    }

    function tempCelsius(event) {
        event.preventDefault()
       setTemp("celsius")
    }

    if (temp === "celsius"){
    return (
        <span>
        <span id="temperature">{Math.round(props.celsius)}°</span>
          <a href="#" id="celsius" className="active units">
            C
          </a>
          |
          <a href="#" id="fahrenheit" className="units" onClick={tempFahrenheit}>
            F
          </a>
          </span>
    )} else {return (
        <span>
        <span id="temperature">{Math.round(((props.celsius)*9)/5+32)}°</span>
          <a href="#" id="celsius" className="units" onClick={tempCelsius}>
            C
          </a>
          |
          <a href="#" id="fahrenheit" className="active units">
            F
          </a>
          </span>
    )

    }
}