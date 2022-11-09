import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const geoApiUrl = process.env.REACT_APP_GEO_API_URL;


export const getWeatherLocation = async ({ location = 'london' }: { location: string }) => {
  if (!geoApiUrl) throw new Error('No geoApiUrl');

  const params = new URLSearchParams();
  params.append('name', location);
  params.append('count', '1');

  return axios.get(geoApiUrl, { params })
    .then(r => {
      return r && r.data && r.data.results && r.data.results?.[0];
    })
    .catch(e => {
      console.log(e.response);
    });
};

export const getWeatherData = async ({ location = 'london' }: { location: string }) => {
  if (!apiUrl) throw new Error('No apiUrl');

  const geoData = await getWeatherLocation({ location });

  if (!geoData) throw new Error(`No data for ${location}`);

  const { latitude, longitude } = geoData;
  const params = new URLSearchParams();
  params.append('latitude', latitude);
  params.append('longitude', longitude);
  params.append('hourly', 'temperature_2m');
  params.append('hourly', 'weathercode');

  return axios.get(apiUrl, { params })
    .then(r => {
      return r && r.data && r.data;
    })
    .catch(e => {
      console.log(e.response);
    });
};
