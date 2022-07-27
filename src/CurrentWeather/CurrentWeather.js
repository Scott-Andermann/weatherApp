import React, { useEffect, useState } from 'react';

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

    const skyIcon = (skyState) => {
        let icon;
        // console.log(skyState);
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
        // console.log(direction);
        let rotation = 90 + direction;
        return {
            'transform': `rotate(${rotation}deg)`,
            'height': 40
        }
    }

    useEffect(() => {
        // console.log(props.data);
    })

    return (
        <div>
            <h3>The current weather in {props.location.city} is:</h3>
            <ul>
                <li><img src={skyIcon(props.data.weather[0].main)} /></li>
                <li>Temperature: {Number(props.data.temp).toFixed(0)}</li>
                <li>Feels Like: {Number(props.data.feels_like).toFixed(0)}</li>
                <li>Wind Speed: {props.data.wind_speed}</li>
                <li>Wind direction: <img src={'/resources/windArrow.jpg'} style={windDirection(props.data.wind_deg)} /></li>
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


