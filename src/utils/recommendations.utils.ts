import { AggregatedDataProps } from '../components/weather-app/weather-app.types';
import { getDayTotals } from './analysis.utils';
import { JACKET_TEMP, UMBRELLA_CODES } from '../constants/weather-codes.constants';


export const recommendations = (data: AggregatedDataProps) => {
  const recommendations: {
    umbrella?: string,
    jacket?: string,
  } = {
    umbrella: undefined,
    jacket: undefined,
  };

  for (const day in data) {
    const { tempMin, codeMost } = getDayTotals(data[day]);
    if (tempMin <= JACKET_TEMP  && !recommendations.jacket) {
      recommendations.jacket = day;
    }
    if (UMBRELLA_CODES.includes(codeMost) && !recommendations.umbrella) {
      recommendations.umbrella = day;
    }
  }

  return {
    ...recommendations,
  }
};
