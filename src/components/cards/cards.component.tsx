import React, { FC } from 'react';
import { CardsProps } from './cards.types';
import { aggregateWeatherData } from '../../utils/weather.utils';
import Card from '../card/card.component';
import { DateTime } from 'luxon';


const Cards: FC<CardsProps> = ({ data }) => {
  const weData = aggregateWeatherData(data, 5);
  console.log({ weData });

  return (
    <div id="cards">
      {Object.keys(weData).map((dateKey) => {
        return (
          <Card key={dateKey} dayData={weData[dateKey]} date={DateTime.fromFormat(dateKey, 'yyyyMMdd')} />
        )
      })}
    </div>
  );
};

export default Cards;
