import { AggregatedDataProps, HourlyDataProps } from '../weather-app/weather-app.types';
import { DateTime } from 'luxon';
import { addLeadZeros } from './string.utils';


export const aggregateWeatherData = ({ temperature_2m, time, weathercode }: HourlyDataProps, limit?: number) => {
  const temperatureLen = temperature_2m.length;
  const timeLen = time.length;
  const weatherCodeLen = weathercode.length;

  if (temperatureLen !== timeLen && temperatureLen !== weatherCodeLen) throw new Error('Data size inconsistent');

  /*
  OUT Structure:

  const data = {
    20221109: {
      0: {
        temp: 14.3,
        code: 65
      },
      1: {
        temp: 12.6,
        code: 0
      },
    },
    20221110: {
      0: {
        temp: 11.6,
        code: 45
      },
      1: {
        temp: 14.2,
        code: 43
      },
    },
  }
  */

  const { data } = time.reduce((
    acc: {
      data: AggregatedDataProps
    },
    current,
    idx,
  ) => {
    const d = DateTime.fromISO(current);
    const {year, month, day, hour } = d;
    const dateKey = `${year}${addLeadZeros(month,2)}${addLeadZeros(day,2)}`;

    return {
      data: {
        ...acc.data,
        [dateKey]: {
          ...acc.data[dateKey],
          [hour]: {
            temp: temperature_2m[idx],
            code: weathercode[idx],
          }
        }
      }
    }
  }, {
    data: {}
  });

  if (limit) {
    const keys = Object.keys(data);

    if (limit < keys.length && limit > 0) {
      const toRemove = keys.length - limit;
      keys.splice(keys.length - toRemove, toRemove);
    }
    const dataLimited: AggregatedDataProps = {};
    keys.forEach((k) => {
      dataLimited[k] = data[k];
    });

    return dataLimited;
  }

  return data;
};
