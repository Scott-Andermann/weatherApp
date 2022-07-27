import { useState, useEffect } from 'react';

import './App.css';
import CurrentWeather from './CurrentWeather/CurrentWeather';

import { sampleData, sampleLocation } from './sampleData';

const APIKey = 'b57e2c09f0096bb9a4e288b49ad7d3ae';
const googleKey = 'AIzaSyC8y6BskH0Wwjjj_A2vTT_V81ZaFD5UAKo';
const dev = false;
const googDev = false;

// const dev = true;
// const googDev = true;


function App() {

  const [data, setData] = useState(null);
  const [zipcode, setZipcode] = useState('28210')
  const [googUrl, setGoogUrl] = useState(`https://maps.googleapis.com/maps/api/geocode/json?key=${googleKey}&components=postal_code:${zipcode}`)
  const [location, setLocation] = useState({});

  const [url, setUrl] = useState(`https://api.openweathermap.org/data/3.0/onecall?lat=41.6967&lon=-88.197&units=metric&exclude=hourly,daily&appid=${APIKey}`);
  // console.log(url);

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
      console.log(json.current);
      setData(json.current);
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
    setUrl(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lng}&units=metric&exclude=hourly,daily&appid=${APIKey}`)
  }, [location])

  useEffect(() => {
    if (dev) {
      setData(sampleData);
    } else {
      fetchData();
    };
  }, [url])

  return (
    <div>
      {/* added the ternary operator because setData is not being reliable for me */}
      <CurrentWeather data={data ? data : sampleData} location={location} setNewZip={setNewZip}/>
      {/* 7 day forecast with temp chart*/}
    </div>

  );
}

export default App;
