import React from "react"

export default function Date(props){


let dayWeek = props.currentDate.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
    
    let dayMonth = props.currentDate.getDate();
    
    let month = props.currentDate.getMonth();
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    
    let year = props.currentDate.getFullYear();
    
    let hours = props.currentDate.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    
    let minutes = props.currentDate.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
return(<h6 id="date">{days[dayWeek]}, {dayMonth} {months[month]} {year} {hours}:{minutes}</h6>)
}