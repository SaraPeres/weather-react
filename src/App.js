import React from "react";
import "./App.css";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container shadow">
        <Weather city="Porto"/>
      </div>
      <br />
      <p className="footer">
        <a href="https://github.com/SaraPeres/weather-react" target="_blank">
          Open-source code
        </a>{" "}
        by Sara Peres
      </p>
    </div>
  );
}

