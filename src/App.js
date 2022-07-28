import { useState, useEffect } from 'react';

import './App.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import Forecast from './Forecast/Forecast';

import { sampleData, sampleLocation, fullSample } from './sampleData';
import { openWeatherKey, googleAPIKey } from './keys';

const APIKey = openWeatherKey;
const googleKey = googleAPIKey;

// set development stat to reduce API calls when making changes
// when refreshing page - dev must be set to true
const dev = false;
const googDev = false;

// const dev = true;
// const googDev = true;

const initLoc = {
  lat: 41.6967,
  lng: -88.197,
  city: 'charlotte Nce'
}


function App() {

  const [data, setData] = useState(null);
  const [zipcode, setZipcode] = useState('28210')
  const [googUrl, setGoogUrl] = useState(`https://maps.googleapis.com/maps/api/geocode/json?key=${googleKey}&components=postal_code:${zipcode}`)
  const [location, setLocation] = useState(initLoc);
  const [url, setUrl] = useState(`https://api.openweathermap.org/data/3.0/onecall?lat=41.6967&lon=-88.197&units=metric&exclude=minutely,hourly&appid=${APIKey}`);

  const setNewZip = (newZip) => {
    setZipcode(newZip);
  }

  const fetchZipData = async () => {
    try {
      const googResponse = await fetch(googUrl);
      const googJson = await googResponse.json();
      // console.log(googJson);
      setLocation({
        lat: googJson.results[0].geometry.location.lat,
        lng: googJson.results[0].geometry.location.lng,
        city: googJson.results[0].formatted_address
      });
    } catch (error) {
      console.log('error', error);
    }

  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json);
      setData(json);
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    setGoogUrl(`https://maps.googleapis.com/maps/api/geocode/json?key=${googleKey}&components=postal_code:${zipcode}`)
  }, [zipcode])

  useEffect(() => {
    if (googDev) {
      setLocation({
        lat: sampleLocation.results[0].geometry.location.lat,
        lng: sampleLocation.results[0].geometry.location.lon,
        city: sampleLocation.results[0].formatted_address
      });
    } else {
      fetchZipData();
    }
  }, [googUrl])

  useEffect(() => {
    setUrl(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lng}&units=metric&exclude=minutely,hourly&appid=${APIKey}`);
  }, [location])

  useEffect(() => {
    if (dev) {
      console.log('setting data to sampleData')
      setData(fullSample);
    } else {
      fetchData();
    };
  }, [url])

  return (
    <div>
      {/* added the ternary operator because setData is not being reliable for me */}
      {data && !data.cod && <CurrentWeather data={data} location={location} setNewZip={setNewZip} />}
      {/* 7 day forecast with temp chart*/}
      {data && !data.cod && <Forecast data={data} />}
    </div>
  );
}

export default App;
