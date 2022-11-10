export interface HourlyDataProps {
  temperature_2m: number[];
  time: string[];
  weathercode: number[];
}

export interface HourProps {
  [hour: number]: {
    temp: number;
    code: number;
  }
}

export interface AggregatedDataProps {
  [dateKey: string]: HourProps[];
}


export interface WeatherAppProps {
  // todo
}
