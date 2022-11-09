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
      <h3>App</h3>
    </div>

  );
};

export default WeatherApp;
