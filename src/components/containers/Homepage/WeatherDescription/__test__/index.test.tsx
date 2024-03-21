import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import WeatherDescription from '../index'

const mockData = {
  summary: 'Weather conditions are good and moderate. Enjoy your day!',
}

describe('Weather Description Component', () => {
  test('Render weather advice accordion', () => {
    const { container } = render(<WeatherDescription summary={mockData.summary} />)
    expect(container).toBeInTheDocument()
  })

  test('Test weather description accordion click interaction', async () => {
    const { getByRole, queryByLabelText } = render(<WeatherDescription summary={mockData.summary} />)

    // 1. Define accordion button
    const triggerBtn = getByRole('button')

    // 2. Expect accordion content should not be visible before triggered
    expect(queryByLabelText('weather-summary-text')).not.toBeInTheDocument()

    // 3. Trigger click button
    fireEvent.click(triggerBtn)

    await waitFor(() => {
      // 4. Expect accordion content to be visible
      const weatherSummaryText = queryByLabelText('weather-summary-text') as HTMLElement
      expect(weatherSummaryText).toBeInTheDocument()
    })
  })
})
