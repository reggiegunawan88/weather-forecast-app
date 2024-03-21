import { ICurrentWeather } from '@/types/Weather'

const CurrentForecastMock: ICurrentWeather = {
  dt: 1711007921,
  sunrise: 1710975210,
  sunset: 1711018795,
  temp: 29.82,
  feels_like: 29.96,
  pressure: 1008,
  humidity: 44,
  dew_point: 16.26,
  uvi: 5.6,
  clouds: 100,
  visibility: 10000,
  wind_speed: 3.89,
  wind_deg: 330,
  wind_gust: 3.48,
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
}

export default CurrentForecastMock
