import React from 'react';
import module from './Header.module.scss'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../assets/search.png'
const api = {
    key: '61bc73c8c41d2744b9c31e118c2b1f12',
    base: 'https://api.openweathermap.org/data/2.5/',
    city_name: 'Bishkek',
}


function Header(props){
const [search, setSearch] = useState("");
const [weather, setWeather] = useState(null);

const searchPressed = () => {
    fetch(`${api.base}/forecast?q=${api.city_name}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
            console.log(result);
        })
}

return (
        <div className={module.header}>
        <div className={module.search}>
            <div className={module.input}>
                <input className={module.button}
                    type='text' placeholder='Enter city/town...'
                    onChange={(e) => setSearch(e.target.value)}
                /></div>
                <button onClick={searchPressed}><img className={module.search_icon} src={Search}/>
                </button>            
            </div>
            {weather && (
                <div>
                    <p className={module.city}>{weather.name}</p>
                    <p className={module.temperature}>{weather.main.temp}°C</p>
                    <p className={module.description}>{weather.weather[0].main}</p>
                    <p className={module.description}>{weather.weather[0].description}</p>
                </div>
            )}
        </div> 
)
            }
export default Header;