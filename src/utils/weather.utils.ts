import { AggregatedDataProps, HourlyDataProps } from '../components/weather-app/weather-app.types';
import { DateTime } from 'luxon';
import { addLeadZeros } from './string.utils';
import { WEATHER_CODES } from '../constants/weather-codes.constants';


export const aggregateWeatherData = ({ temperature_2m, time, weathercode }: HourlyDataProps, limit?: number) => {
  const temperatureLen = temperature_2m.length;
  const timeLen = time.length;
  const weatherCodeLen = weathercode.length;

  if (temperatureLen !== timeLen && temperatureLen !== weatherCodeLen) throw new Error('Data size inconsistent');

  const days = timeLen / 24;
  if (limit && limit > 0 && limit < days) {
    const toRemove = (days - limit) * 24;
    temperature_2m.splice(temperatureLen - toRemove, toRemove);
    time.splice(timeLen - toRemove, toRemove);
    weathercode.splice(weatherCodeLen - toRemove, toRemove);
  }

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

  return { data };
};

export const getWeatherConditionString = (code: number): string => {
  return WEATHER_CODES[code];
}
