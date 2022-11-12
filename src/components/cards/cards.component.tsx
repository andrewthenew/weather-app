import React, { FC } from 'react';
import { CardsProps } from './cards.types';
import { aggregateWeatherData } from '../../utils/weather.utils';
import Card from '../card/card.component';
import { DateTime } from 'luxon';
import { recommendations } from '../../utils/recommendations.utils';
import Recommendations from './recommendations.component';


const Cards: FC<CardsProps> = ({ data }) => {
  const { data: weData } = aggregateWeatherData(data, 5);
  const { umbrella, jacket } = recommendations(weData);


  return (
    <div id="cards">
      {Object.keys(weData).map((dateKey) => {
        return (
          <Card key={dateKey} dayData={weData[dateKey]} date={DateTime.fromFormat(dateKey, 'yyyyMMdd')} />
        );
      })}

      {(umbrella || jacket) && (
        <Recommendations umbrella={umbrella} jacket={jacket} />
      )}
    </div>
  );
};

export default Cards;
