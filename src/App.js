import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="container shadow">
        <Search />
        <Weather />
        <Forecast />
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

