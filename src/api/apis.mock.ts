import { geoMock } from './mocks/geo.mock';
import { meteoMock } from './mocks/meteo.mock';


export const getWeatherLocation = async ({ location = 'london' }: { location: string }) => {
  return geoMock;
};

export const getWeatherData = async ({ location = 'london' }: { location: string }) => {
  return meteoMock;
};
