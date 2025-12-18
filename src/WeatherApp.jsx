import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 31.33,
        humidity: 24,
        sealevel: 1007,
        temp: 33.05,
        tempMax: 33.05,
        tempMin: 33.05,
        weather: "haze",
    });

    let updateInfo= (result) =>{
        setWeatherInfo(result);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br /><br /><br /><br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}