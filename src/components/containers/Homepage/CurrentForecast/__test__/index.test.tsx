import CurrentForecastMock from '@/constants/mocks/CurrentForecastMock'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import CurrentForecast from '../index'

describe('Current forecast component', () => {
  test('Test render humidity and wind icon correctly', () => {
    const { getByLabelText } = render(<CurrentForecast data={CurrentForecastMock} />)

    const dropletIcon = getByLabelText('droplet-icon')
    const windIcon = getByLabelText('wind-icon')

    expect(dropletIcon).toBeInTheDocument()
    expect(windIcon).toBeInTheDocument()
  })
})
