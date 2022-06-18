import React from "react";


const InfoApp = ({data}) => (
    <div className="weather-info">
        <div className="city-name"> {data.name} </div>
        <div className="temperature"> Temperature: {data.main.temp} &deg;C </div>
        <div className="humidity"> Humidity: {data.main.humidity} %</div>
        <div className="hpa"> Pressure: {data.main.pressure}</div>
        <div className="sunrise"> Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-PL')}</div>
        <div className="sunset"> Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-PL')}</div>
        {/* <div>Teraz {date}</div> */}
        <div></div>
    </div>
)

export default InfoApp;