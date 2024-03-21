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
  wind_gust: number
}

export interface IHourlyWeather extends Omit<ICurrentWeather, 'sunrise' | 'sunset'> {
  pop: number
  rain?: Record<string, number>
}

export interface IDailyWeather {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  summary: string
  temp: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  clouds: number
  pop: number
  rain: number
  uvi: number
}
