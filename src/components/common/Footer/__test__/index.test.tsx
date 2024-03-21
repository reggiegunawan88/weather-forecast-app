import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Footer from '../index'

describe('Footer component', () => {
  test('Render footer component', () => {
    const { getByLabelText } = render(<Footer />)

    expect(getByLabelText('footer-text')).toHaveTextContent('Powered by the OpenWeather API. Background images from Unsplash.')
  })
})
