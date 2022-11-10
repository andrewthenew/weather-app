import { HourProps } from '../weather-app/weather-app.types';


export const getMostFrequentValueFrom = (array: number[]): number => {
  array.sort();
  console.log({ array });

  const countsCollection: any = {};
  let count = 1;

  array.forEach((n, idx) => {
    const nextVal = array[idx + 1];

    if (nextVal) {
      if (n === nextVal) {
        count++;
      } else {
        countsCollection[n] = count;
        count = 1;
      }
    } else {
      countsCollection[n] = count;
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
    temp_min: Math.min(...temps),
    temp_max: Math.max(...temps),
    code_most: getMostFrequentValueFrom(codes),
    temps,
  }
};
