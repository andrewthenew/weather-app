import React, { FC, useEffect, useRef, useState } from 'react';
import { getWeatherData } from '../api/apis.mock';
import Footer from '../components/footer/footer.component';
import Search from '../components/search/search.component';
import Cards from '../components/cards/cards.component';
import { HourlyDataProps } from './weather-app.types';


const WeatherApp: FC = () => {
  const [data, setData]=  useState<HourlyDataProps>();
  const searchRef = useRef<HTMLInputElement>(null);

  const fetchData = async (location: string) => {
    const d = await getWeatherData({ location });
    if (d && d.hourly) {
      setData(d.hourly);
    }
  }

  useEffect(() => {
    // fetchData(); // todo: probably with CURRENT location?
  }, []);


  return (
    <div id="weatherApp">
      <header role="heading" id="header">
        <Search ref={searchRef} onSearch={fetchData} />
      </header>
      <main>
        {data && (
          <>
            <Cards data={data} />
            <div id="info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam doloremque perferendis temporibus voluptas. Amet ex minus necessitatibus praesentium reiciendis. Aperiam assumenda ea facere iure nihil ratione repudiandae rerum veritatis!
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>

  );
};

export default WeatherApp;
