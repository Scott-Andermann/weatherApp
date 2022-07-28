import React, { useEffect, useState } from 'react';
import './CurrentWeather.css';

function CurrentWeather(props) {
    const [newZip, setNewZip] = useState('');

    const handleNewZipChange = (event) => {
        setNewZip(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newZip.length === 5) {
            props.setNewZip(newZip);
        }
        setNewZip('');
    }

    const windDirection = (direction) => {
        let rotation = 90 + direction;
        return {
            'transform': `rotate(${rotation}deg)`,
            'height': 40
        }
    }

    return (
        <div className='current'>
            <h2>The current weather in {props.location.city} is:</h2>
            <ul>
                <li><img src={`/resources/${props.data.current.weather[0].main}.png`} /></li>
                <li>Temperature: {Number(props.data.current.temp).toFixed(0)} C</li>
                <li>Feels Like: {Number(props.data.current.feels_like).toFixed(0)} C</li>
                <li>Wind Speed: {props.data.current.wind_speed} m/s</li>
                <li>Wind direction: <br></br><img src={'/resources/windArrow.jpg'} style={windDirection(props.data.current.wind_deg)} /></li>
            </ul>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Zip Code"
                    value={newZip}
                    onChange={handleNewZipChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}

export default CurrentWeather;


