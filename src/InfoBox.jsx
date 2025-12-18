import { useState } from 'react';
import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({info}){
    const clearURL="https://images.unsplash.com/photo-1743738049563-520b88442d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const hotURL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const coldURL="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const snowURL="https://images.unsplash.com/photo-1644716276377-59d4908d3729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25vdyUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rainURl="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return (
        <div className="infoBox">
            {/* <h2>Weather Info - {info.weather}</h2> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}    
                image={info.weather=="clear sky"? clearURL : info.humidity>80 ? rainURl : info.temp>15 ? hotURL: info.temp<7 ? <CloudySnowingIcon /> : <AcUnitIcon />}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city}  {info.weather=="clear sky"? <CloudIcon /> : info.humidity>80 ? <ThunderstormIcon /> : info.temp>15 ? <SunnyIcon />: info.temp<7 ? snowURL : coldURL}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                  <div>Temperature = {info.temp}&deg;C</div>
                  <div>Minimum Temperature = {info.tempMin}&deg;C</div>
                  <div>Maximum Temperature = {info.tempMax}&deg;C</div>
                  <div>Humidity = {info.humidity}</div>
                  <div>Sea Level = {info.sealevel}</div>
                  <div>The Weather can be describe as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</div>
                </Typography>
              </CardContent>
            </Card>
            </div>
        </div>
    );
}