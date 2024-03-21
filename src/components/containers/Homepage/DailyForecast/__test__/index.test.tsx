import DailyForecastMock from '@/constants/mocks/DailyForecastMock'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import DailyForecast from '../index'

describe('Daily Forecast Component', () => {
  test('Test render 5 days forecast', async () => {
    const { getByRole, queryByLabelText, getByLabelText } = render(<DailyForecast data={DailyForecastMock} />)

    // 1. Define accordion trigger button
    const triggerButton = getByRole('button')

    // 2. Accordion content should not be visible before triggered
    expect(queryByLabelText('daily-forecast-list')).not.toBeInTheDocument()

    // 3. Click button
    fireEvent.click(triggerButton)

    // 4. Daily forecast list child length should be 5 reflecting to provide a 5-day weather forecast
    expect(getByLabelText('daily-forecast-list').childElementCount).toBe(5)
  })
})
