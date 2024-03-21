import '@testing-library/jest-dom'
import { DateTimeHelpers } from '../DateTimeHelpers'
import { WeatherHelpers } from '../WeatherHelpers'

describe('Weather Helpers test', () => {
  test('Test getWeatherKeyword return correct value', () => {
    const inputWord = 'clear'
    const isDayTime = DateTimeHelpers.isDaytime()

    if (isDayTime) {
      expect(WeatherHelpers.getWeatherKeyword(inputWord)).toEqual('clear sky')
    } else {
      expect(WeatherHelpers.getWeatherKeyword(inputWord)).toEqual('night clear sky')
    }
  })

  test('Should return sunny weather advice', () => {
    const weatherId = 800
    expect(WeatherHelpers.getWeatherAdvice(weatherId)).toEqual("It's sunny day!. Weather conditions are good and moderate. Enjoy your day!")
  })

  test('Should return cloudy weather advice', () => {
    const weatherId = 801
    expect(WeatherHelpers.getWeatherAdvice(weatherId)).toEqual('Keep an eye on weather updates throughout the day, as conditions can change rapidly.')
  })

  test('Should return rainy weather advice', () => {
    const weatherId = 500
    expect(WeatherHelpers.getWeatherAdvice(weatherId)).toEqual("It's raining today! Don't forget to bring your umbrella.")
  })

  test('Should return snowy weather advice', () => {
    const weatherId = 600
    expect(WeatherHelpers.getWeatherAdvice(weatherId)).toEqual(
      "It's snowy now! Dress in layers to stay warm, and wear waterproof outer layers to keep dry in the snow."
    )
  })

  test('Should return thunderstorm weather advice', () => {
    const weatherId = 200
    expect(WeatherHelpers.getWeatherAdvice(weatherId)).toEqual(
      'Avoid using water-related appliances such as showers, sinks, and washing machines during a thunderstorm, as lightning can travel through plumbing. Stay safe!'
    )
  })
})
