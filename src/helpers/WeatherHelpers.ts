export class WeatherHelpers {
  static getWeatherKeyword(keyword: string) {
    return WEATHER_TO_PHOTO_KEYWORDS[keyword]
  }

  static getWeatherAdvice({ temp, weatherDesc }: { temp: number; weatherDesc: string }) {
    return generateWeatherAdvice(temp, weatherDesc)
  }
}

interface WeatherKeywords {
  [key: string]: string
}

export const WEATHER_TO_PHOTO_KEYWORDS: WeatherKeywords = {
  clear: 'clear sky',
  clouds: 'cloudy sky',
  rain: 'rainy',
  snow: 'snowy',
}

function generateWeatherAdvice(temp: number, weatherDesc: string) {
  if (temp > 25 && weatherDesc.includes('clear')) {
    return "It's hot and sunny. Wear sunscreen to protect your skin and don't forget to stay hydrated by drinking plenty of water. One more thing, wear a hat to shield yourself from the sun 😀."
  }
  if (weatherDesc.includes('rain')) {
    return "It's raining today! Don't forget to bring your umbrella."
  }
  return 'Weather conditions are good and moderate. Enjoy your day!'
}
