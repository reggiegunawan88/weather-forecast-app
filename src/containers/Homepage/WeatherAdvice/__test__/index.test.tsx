import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import WeatherAdvice from '../index'

const mockData = {
  tempMock: 26,
  weatherDescMock: 'clear',
}

describe('Weather Advice Component', () => {
  test('Render weather advice accordion', () => {
    const { container } = render(<WeatherAdvice temp={mockData.tempMock} weatherDesc={mockData.weatherDescMock} />)
    expect(container).toBeInTheDocument()
  })

  test('Test weather advice accordion click interaction', async () => {
    const { getByRole, queryByLabelText } = render(<WeatherAdvice temp={mockData.tempMock} weatherDesc={mockData.weatherDescMock} />)

    // 1. Define accordion button
    const triggerBtn = getByRole('button')

    // 2. Expect accordion content should not be visible before triggered
    expect(queryByLabelText('weather-advice-text')).not.toBeInTheDocument()

    // 3. Trigger click button
    fireEvent.click(triggerBtn)

    await waitFor(() => {
      // 4. Expect accordion content to be visible
      const weatherAdviceText = queryByLabelText('weather-advice-text') as HTMLElement
      expect(weatherAdviceText).toBeInTheDocument()
    })
  })
})
