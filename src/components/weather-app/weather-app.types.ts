export interface HourlyDataProps {
  temperature_2m: number[];
  time: string[];
  weathercode: number[];
}

export interface HourProps {
  temp: number;
  code: number;
}

export interface AggregatedDataProps {
  [dateKey: string]: HourProps[];
}
