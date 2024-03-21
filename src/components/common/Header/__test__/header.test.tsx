import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from '../index'

describe('Header component', () => {
  test('Render header component', () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument()
  })

  test('Render header icon', () => {
    const { getByLabelText } = render(<Header />)
    const sunIconElement = getByLabelText('sun-icon')
    expect(sunIconElement).toBeInTheDocument()
  })
})
