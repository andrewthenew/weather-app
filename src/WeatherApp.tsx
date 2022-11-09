import React, { useEffect, useState } from 'react';
import { getWeatherData } from './api/apis.mock';


const WeatherApp = () => {
  const [data, setData]=  useState<any>(); // any yet

  const fetchData = async () => {
    const d = await getWeatherData({ location: 'london' });
    if (d) {
      setData(d);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div id="weatherApp" role="main">
      <header role="heading" id="header">
        <input type="search" role="searchbox" id="searchBox" placeholder="e.g. London" />
      </header>
    </div>

  );
};

export default WeatherApp;
