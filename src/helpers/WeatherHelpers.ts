import { DateTimeHelpers } from './DateTimeHelpers'

export class WeatherHelpers {
  static getWeatherKeyword(keyword: string) {
    return WEATHER_TO_PHOTO_KEYWORDS[keyword]
  }

  static getWeatherAdvice(weatherCode: number) {
    return generateWeatherAdvice(weatherCode)
  }
}

interface WeatherKeywords {
  [key: string]: string
}

// Docs reference: https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
enum WEATHER_CODE {
  CLOUDS = 801,
  CLEAR = 800,
  HAZE = 700,
  SNOW = 600,
  RAIN = 500,
  DRIZZLE = 300,
  THUNDER = 200,
}

export const WEATHER_TO_PHOTO_KEYWORDS: WeatherKeywords = {
  clear: DateTimeHelpers.isDaytime() ? 'clear sky' : 'night clear sky',
  clouds: DateTimeHelpers.isDaytime() ? 'cloudy sky' : 'night clouds',
  haze: DateTimeHelpers.isDaytime() ? 'haze' : 'night haze',
  drizzle: 'drizzle',
  rain: 'rainy',
  snow: 'snowy',
}

function generateWeatherAdvice(weatherCode: number) {
  switch (true) {
    case weatherCode === WEATHER_CODE.CLEAR:
      return "It's sunny day!. Weather conditions are good and moderate. Enjoy your day!"

    case weatherCode >= WEATHER_CODE.CLOUDS:
      return 'Keep an eye on weather updates throughout the day, as conditions can change rapidly.'

    case weatherCode >= WEATHER_CODE.HAZE:
      return 'Stay indoors and reduce physical activities. Minimize activities that can produce indoor air pollutants in enclosed spaces, e.g. smoking.'

    case weatherCode >= WEATHER_CODE.SNOW:
      return "It's snowy now! Dress in layers to stay warm, and wear waterproof outer layers to keep dry in the snow."

    case weatherCode >= WEATHER_CODE.RAIN:
      return "It's raining today! Don't forget to bring your umbrella."

    case weatherCode >= WEATHER_CODE.DRIZZLE:
      return 'Drizzle might not seem like heavy rain, but it can still get you wet. Carry an umbrella or wear a waterproof jacket to stay dry.'

    case weatherCode >= WEATHER_CODE.THUNDER:
      return 'Avoid using water-related appliances such as showers, sinks, and washing machines during a thunderstorm, as lightning can travel through plumbing. Stay safe!'
    default:
      break
  }
}
