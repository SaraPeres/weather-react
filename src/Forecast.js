import React from "react";

export default function Header() {
  return (
    <div id="forecast">
      <div className="row" id="forecast-time" />
      <div className="line" />
      <div className="row" id="forecast-weather-icons" />
      <div className="row" id="forecast-weather-temp" />
    </div>
  );
}
