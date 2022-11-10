import React, { FC } from 'react';
import { CardProps } from './card.types';
import { getDayTotals } from '../../utils/analysis.utils';
import { getWeatherConditionDescription } from '../../utils/weather.utils';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);


const Card: FC<CardProps> = ({ dayData, date }) => {
  console.log({ dayData, date });
  const { temp_max, temp_min, code_most, temps } = getDayTotals(dayData);

  const renderSmallDate = () => {
    return date && `${date.year}, ${date.monthShort} ${date.day}`;
  }

  return (
    <div className="card">
      <div className="dayWrapper">
        <div className="day">{date?.weekdayLong}</div>
        <div className="smallDate">{renderSmallDate()}</div>
      </div>

      <div className="weatherCodeWrapper">
        <div className="icon"></div>
        <div className="smallDescription">
          {getWeatherConditionDescription(code_most)}
        </div>
      </div>

      <div className="summaryWrapper">
        <span className="min"><strong>{temp_min}°</strong></span> – <span className="max"><strong>{temp_max}°</strong></span>
      </div>

      <div className="chartWrapper">
        <Line
          redraw
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
