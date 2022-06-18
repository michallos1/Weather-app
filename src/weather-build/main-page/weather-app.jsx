import { useState, useEffect } from "react";
import React from "react";
import "./weather-css.css"
import InfoApp from "../info-page/info-app";


const api = {
    key: "3416857f3eabcf29e6f683aec66b5eb7",
    url: "https://api.openweathermap.org/data/2.5/"
}
export default function WeatherApp () {
    const [query, setQuery] = useState('');
    const [pogoda, setPogoda] = useState([]);

    // useEffect(() => {
    //     const start = async () => {
    //     // setQuery('Lublin')

    //     await fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setPogoda(result);
    //             // setQuery('');
    //             console.log(result);
    //         });
    //     }
    //     start();
    // }, [pogoda])

    const search = city => {
        if (city.key === "Enter"){
            fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setPogoda(result);
                setQuery('');
                console.log(result);
            });
        }
    }    

    return(
        <div className="main">
            <div className="weather-app">
                <div className="weather-app-name">Weather App</div>
                <div className="search-bar">
                    <input 
                        type="text"
                        className="search-input"
                        placeholder="   Search. . ."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof pogoda.main != 'undefined') ? (
                    <InfoApp data={pogoda} />
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

