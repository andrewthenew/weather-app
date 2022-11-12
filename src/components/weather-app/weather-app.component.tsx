import React, { FC, useEffect, useRef, useState } from 'react';
import throttle from 'lodash.throttle';
import { HourlyDataProps } from './weather-app.types';
import Footer from '../footer/footer.component';
import Search from '../search/search.component';
import Cards from '../cards/cards.component';
import { getWeatherData } from '../../api/apis';


const WeatherApp: FC = () => {
  const [data, setData]=  useState<HourlyDataProps>();
  const [locationName, setLocationName] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const fetchData = throttle(async (location: string) => {
    const d = await getWeatherData({ location });
    if (d && d.hourly) {
      setData(d.hourly);
      if (searchRef && searchRef.current){
        setLocationName(searchRef.current.value);
      }
    }
  }, 3500); // delay/throttle api fetches

  useEffect(() => {
    // fetchData(); // todo: probably with CURRENT location?
  }, []);


  return (
    <div id="weatherApp">
      <header role="heading" id="header">
        <Search ref={searchRef} onSearch={fetchData} />
        {locationName && (
          <div id="locationName">
            {locationName}
          </div>
        )}
      </header>
      <main>
        {data && (
          <Cards data={data} />
        )}
      </main>
      <Footer />
    </div>

  );
};

export default WeatherApp;
