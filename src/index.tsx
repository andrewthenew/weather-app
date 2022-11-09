import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/app.scss'
import WeatherApp from './WeatherApp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <WeatherApp />
);
