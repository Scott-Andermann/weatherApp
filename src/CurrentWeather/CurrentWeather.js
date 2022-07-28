import React, { useEffect, useState } from 'react';
import './CurrentWeather.css';

function CurrentWeather(props) {
    const [newZip, setNewZip] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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

    const skyIcon = (skyState) => {
        let icon;
        switch (skyState) {
            case 'Clear':
                icon = '/resources/sunny.png';
                break;
            case 'Rain':
                icon = '/resources/rain.png';
                break;
            case 'Clouds':
                icon = '/resources/cloudy.png';
                break;
            case 'Snow':
                icon = '/resources/snow.png';
                break
            default:
                icon = '/resources/sunny.png';
        }
        return icon;
    }

    const windDirection = (direction) => {
        let rotation = 90 + direction;
        return {
            'transform': `rotate(${rotation}deg)`,
            'height': 40
        }
    }

    useEffect(() => {
        console.log(props.data);
        if (props.data) setIsLoading(false);
    }, [props.data])

    if (isLoading) {
        return (
            <div>
                <h2>Loading</h2>
            </div>
        )
    }
    else {
    return (
        <div className='current'>
            <h2>The current weather in {props.location.city} is:</h2>
            <ul>
                <li><img src={`/resources/${props.data.current.weather[0].main}.png`} /></li>
                <li>Temperature: {Number(props.data.current.temp).toFixed(0)} C</li>
                <li>Feels Like: {Number(props.data.current.feels_like).toFixed(0)} C</li>
                <li>Wind Speed: {props.data.current.wind_speed} m/s</li>
                <li>Wind direction: <br></br><img src={'/resources/windArrow.jpg'} style={windDirection(props.data.wind_deg)} /></li>
            </ul>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter Zip Code"
                    value={newZip}
                    onChange={handleNewZipChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );}
}

export default CurrentWeather;


