const WEATHER_CODE_VALUES = {
  CLEAR: 'clear',
  MAINLY_CLEAR: 'mainly clear',
  PARTLY_CLOUDY: 'partly cloudy',
  OVERCAST: 'overcast',
  FOG: 'fog',
  FOG_RIME: 'depositing rime fog',
  DRIZZLE_LIGHT: 'light drizzle',
  DRIZZLE_MODERATE: 'moderate drizzle',
  DRIZZLE_DENSE: 'dense drizzle',
  DRIZZLE_FREEZING_LIGHT: 'light freezing drizzle',
  DRIZZLE_FREEZING_DENSE: 'dense freezing drizzle',
  RAIN_SLIGHT: 'slight rain',
  RAIN_MODERATE: 'moderate rain',
  RAIN_HEAVY: 'heavy rain',
  RAIN_SHOWERS_SLIGHT: 'slight rain showers',
  RAIN_SHOWERS_MODERATE: 'moderate rain showers',
  RAIN_SHOWERS_VIOLENT: 'violent rain showers',
  SNOW_FALL_SLIGHT: 'slight snow fall',
  SNOW_FALL_MODERATE: 'moderate snow fall',
  SNOW_FALL_HEAVY: 'heavy snow fall',
  SNOW_GRAINS: 'snow grains',
  SNOW_SHOWERS_SLIGHT: 'slight snow showers',
  SNOW_SHOWERS_HEAVY: 'heavy snow showers',
  THUNDERSTORM: 'thunderstorm',
  THUNDERSTORM_SLIGHT_HAIL: 'thunderstorm with slight hail',
  THUNDERSTORM_HEAVY_HAIL: 'thunderstorm with heavy hail',
}

const {
  CLEAR, MAINLY_CLEAR, PARTLY_CLOUDY, OVERCAST, FOG, FOG_RIME,
  DRIZZLE_LIGHT, DRIZZLE_MODERATE, DRIZZLE_DENSE,
  DRIZZLE_FREEZING_LIGHT, DRIZZLE_FREEZING_DENSE,
  RAIN_SLIGHT, RAIN_MODERATE, RAIN_HEAVY,
  SNOW_FALL_SLIGHT, SNOW_FALL_MODERATE, SNOW_FALL_HEAVY, SNOW_GRAINS,
  RAIN_SHOWERS_SLIGHT, RAIN_SHOWERS_MODERATE, RAIN_SHOWERS_VIOLENT,
  SNOW_SHOWERS_SLIGHT, SNOW_SHOWERS_HEAVY,
  THUNDERSTORM, THUNDERSTORM_SLIGHT_HAIL, THUNDERSTORM_HEAVY_HAIL,
} = WEATHER_CODE_VALUES;

const WEATHER_CODES = {
  0: CLEAR,
  1: MAINLY_CLEAR,
  2: PARTLY_CLOUDY,
  3: OVERCAST,
  45: FOG,
  48: FOG_RIME,
  51: DRIZZLE_LIGHT,
  53: DRIZZLE_MODERATE,
  55: DRIZZLE_DENSE,
  56: DRIZZLE_FREEZING_LIGHT,
  57: DRIZZLE_FREEZING_DENSE,
  61: RAIN_SLIGHT,
  63: RAIN_MODERATE,
  65: RAIN_HEAVY,
  71: SNOW_FALL_SLIGHT,
  73: SNOW_FALL_MODERATE,
  75: SNOW_FALL_HEAVY,
  77: SNOW_GRAINS,
  80: RAIN_SHOWERS_SLIGHT,
  81: RAIN_SHOWERS_MODERATE,
  82: RAIN_SHOWERS_VIOLENT,
  85: SNOW_SHOWERS_SLIGHT,
  86: SNOW_SHOWERS_HEAVY,
  95: THUNDERSTORM,
  96: THUNDERSTORM_SLIGHT_HAIL,
  99: THUNDERSTORM_HEAVY_HAIL,
}

export { WEATHER_CODES }
