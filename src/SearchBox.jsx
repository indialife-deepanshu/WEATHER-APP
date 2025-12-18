import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] =useState(false);

    const API_URL=import.meta.env.VITE_API_URL;
    const KEY=import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${KEY}&units=metric`);
            let jsonResponse= await response.json();
            // console.log(jsonResponse);
            let result={
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                sealevel: jsonResponse.main.sea_level,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            // console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }

    let handleSerach = (event)=>{
        setCity(event.target.value);
    }

    // const isEmpty = (obj) => Object.keys(obj).length === 0;

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let r=await getWeatherInfo();
            // if(isEmpty(r)) setError(true);
            updateInfo(r);
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className='searchBox'>
            {/* <h2>Search</h2> */}
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleSerach}/>
            <br /><br />
            <Button variant="contained" type='submit' endIcon={<SendIcon />}>
            Send
            </Button>
            {error && <Alert severity="warning">No Such place in API</Alert>}
            </form>
        </div>
    );
}