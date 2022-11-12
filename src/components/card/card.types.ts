import { HourProps } from '../weather-app/weather-app.types';
import { DateTime } from 'luxon';


export interface CardProps {
  dayData: HourProps[];
  date?: DateTime;
}
