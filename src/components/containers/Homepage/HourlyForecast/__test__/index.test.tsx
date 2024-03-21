import HourlyForecastMock from '@/constants/mocks/HourlyForecastMock'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HourlyForecast from '../index'

describe('Hourly Forecast Component', () => {
  test('Test render the upcoming 6 hours forecast', async () => {
    const { getByLabelText } = render(<HourlyForecast data={HourlyForecastMock} />)

    // 1. Define hourly forecast list element
    const hourlyForecastList = getByLabelText('hourly-forecast-list')

    // 2. Hourly forecast list child length should be 6 reflecting to provide the upcoming 6 hours weather forecast
    expect(hourlyForecastList.childElementCount).toBe(6)
  })
})
