import React from "react"

export default function ForecastHours(props) {

    function hours() {
        let hours = new Date(props.data.dt*1000).getHours()
    if (hours < 10){
    return `0${hours}:00`} else {
        return `${hours}:00`}

    }

    return (<div className="col next-hours">{hours()}</div>)
}