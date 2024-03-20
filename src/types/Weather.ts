export interface Weather {
  current: ICurrentWeather
  daily: IDailyWeather[]
  hourly: IHourlyWeather[]
  lat: number
  lon: number
  timezone: string
  timezone_offset: number
}

export interface ICurrentWeather {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  temp: number
  uvi: number
  visibility: number
  weather: {
    description: string
    icon: string
    id: number
    main: string
  }[]
  wind_deg: number
  wind_speed: number
}

export interface IHourlyWeather extends ICurrentWeather {
  pop: number
  wind_gust: number
}

export interface IDailyWeather extends Omit<IHourlyWeather, 'feels_like' | 'temp'> {
  summary: string
  feels_like: {
    day: number
    eve: number
    morn: number
    night: number
  }
  temp: {
    day: number
    eve: number
    max: number
    min: number
    morn: number
    night: number
  }
  moon_phase: number
  moonrise: number
  moonset: number
}
