import React, { FC } from 'react';
import { CardProps } from './card.types';
import { getDayTotals } from '../../utils/analysis.utils';
import { getWeatherConditionString } from '../../utils/weather.utils';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Icon from './icon.component';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);


const Card: FC<CardProps> = ({ dayData, date }) => {
  const { tempMax, tempMin, codeMost, temps } = getDayTotals(dayData);

  const renderSmallDate = () => {
    return date && `${date.year}, ${date.monthShort} ${date.day}`;
  }

  return (
    <div className="card" role="article">
      <div className="dayWrapper">
        <div className="day">{date?.weekdayLong}</div>
        <div className="smallDate">{renderSmallDate()}</div>
      </div>

      <div className="weatherCodeWrapper">
        <Icon code={codeMost} />
        <div className="smallDescription">
          {getWeatherConditionString(codeMost)}
        </div>
      </div>

      <div className="summaryWrapper">
        <span className="min"><strong>{tempMin}°</strong></span> – <span className="max"><strong>{tempMax}°</strong></span>
      </div>

      <div className="chartWrapper">
        <Line
          options={{ responsive: true }}
          data={{
            labels: Object.keys(dayData),
            datasets: [
              {
                label: '',
                data: Object.values(temps),
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Card;
