import React, { useEffect, useState } from 'react';
import './CurrentWeather.css';

function CurrentWeather(props) {
    const [newZip, setNewZip] = useState('');
    const [buttonState, setButtonState] = useState(false);
    const [sunset, setSunset] = useState('');


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

    const sunsetTime = (timestamp, timezoneOffset) => {
        timezoneOffset = timezoneOffset + 14400;
        timestamp = (timestamp + timezoneOffset) * 1000;
        let sunset = new Date(timestamp);
        let hours = Number(sunset.getHours()) - 12;
        let minutes = '0' + sunset.getMinutes();
        let seconds = '0' + sunset.getSeconds();
        return hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2) + 'PM';
    }

    useEffect(() => {
    }, [])

    const onClick = () => {
        setButtonState((buttonState) => !buttonState);
    }
    return (
        <div className='current'>
            <h2>The current weather in {props.location.city} is:</h2>
            <ul>
                <li><img src={`/resources/${props.data.current.weather[0].main}.png`} /></li>
                <li>Temperature: {Number(props.data.current.temp).toFixed(0)} C</li>
                <li>Feels Like: {Number(props.data.current.feels_like).toFixed(0)} C</li>
                <li className='button'><button className='showHide' onClick={onClick}>{buttonState ? 'Show Less' : 'Show More'}</button></li>
                <ul className={`more-info${buttonState ? 'show' : ''}`}>
                    <li className='info'>Humidity: {Number(props.data.current.humidity)} %</li>
                    <li className='info'>Sunset: {sunsetTime(props.data.current.sunset, props.data.timezone_offset)}</li>
                    <li className='info'>Wind Speed: {props.data.current.wind_speed} m/s</li>
                    <li className='info'>Wind direction: <br></br><img className='arrow' src={'/resources/windArrow.jpg'} style={windDirection(props.data.current.wind_deg)} /></li>
                </ul>

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


