import { HourProps } from '../components/weather-app/weather-app.types';


export const getMostFrequentValueFrom = (array: number[]): number => {
  array.sort();

  const countsCollection: any = {};
  let count = 1;

  array.forEach((weatherCode, idx) => {
    const nextVal = array[idx + 1];

    if (nextVal) {
      if (weatherCode === nextVal) {
        count++;
      } else {
        countsCollection[weatherCode] = count;
        count = 1;
      }
    } else {
      countsCollection[weatherCode] = count;
    }
  });

  const counts: number[] = Object.values(countsCollection);
  const maxCount = Math.max(...counts);
  const idxMax = counts.indexOf(maxCount);
  const maxValue = Object.keys(countsCollection)[idxMax];

  return parseInt(maxValue);
};

export const getDayTotals = (day: HourProps[]) => {

  const { temps, codes } = Object.keys(day).reduce((
    acc: {
      temps: number[],
      codes: number[],
    },
    currentHour
  ) => {

    return {
      temps: [
        ...acc.temps,
        day[parseInt(currentHour)].temp
      ],
      codes: [
        ...acc.codes,
        day[parseInt(currentHour)].code
      ]
    }
  }, {
    temps: [],
    codes: [],
  });

  return {
    tempMin: Math.min(...temps),
    tempMax: Math.max(...temps),
    codeMost: getMostFrequentValueFrom(codes),
    temps,
  }
};
