import React, { useEffect, useState } from 'react';
import './Forecast.css';
import ForecastChart from './ForecastChart';

function Forecast(props) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date(Date.now());
    let week = days.slice(d.getDay());
    week = week.concat(days.slice(0, d.getDay()));
    const daily = [0, 1, 2, 3, 4, 5, 6];
    

    return (
        <div>
            <h3>Daily Temperatures</h3>
            <ForecastChart data={props.data} week={week} />

            {/* Should I move this block to a new Component? */}
            <div className='container'>
                {daily.map(element => <ul className={'forecast ' + element}>
                    <img className='icon' src={`/resources/${props.data.daily[element].weather[0].main}.png`} />
                    <li><h3 className='day'>{week[element]}</h3></li>
                    <li>Temperature: {Number(props.data.daily[element].temp.max).toFixed(0)} / {Number(props.data.daily[element].temp.min).toFixed(0)} C</li>
                    <li>Wind Speed: {Number(props.data.daily[element].wind_speed).toFixed(0)} m/s</li>
                </ul>)}
            </div>
        </div>
    )

}


export default Forecast;