import React, { FC } from 'react';
import { CardsProps } from './cards.types';
import { aggregateWeatherData } from '../../utils/weather.utils';


const Cards: FC<CardsProps> = ({ data }) => {
  const weData = aggregateWeatherData(data, 5);
  console.log({ weData });

  return (
    <h3>test text</h3>
  );
};

export default Cards;
