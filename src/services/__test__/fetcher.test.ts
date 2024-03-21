import '@testing-library/react'
import fetch from 'jest-fetch-mock'
import fetcher from '../fetcher'

interface IMockData {
  mockId: number
  mockName: string
}

beforeEach(() => {
  fetch.resetMocks()
})

describe('General fetcher function', () => {
  const mockUrl = 'https://example.com/data'

  test('Test success fetch data with generic type', async () => {
    // 1. Define mock data
    const mockData: IMockData = { mockId: 1, mockName: 'john doe' }

    // 2. Mock fetch response
    fetch.mockResponseOnce(JSON.stringify(mockData))

    // 3. Simulate fetch data with our fetcher function alongside with the url
    const result = await fetcher<IMockData>(mockUrl)

    // 4. Result response should be equal to mock data and called once
    expect(result).toEqual(mockData)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  test('Test fail fetch and throws an error when the response is not ok', async () => {
    // 1. Define error mock data
    const errorMockData = {
      status: 404,
      json: async () => ({ message: 'Not found' }),
    } as unknown as Response

    // 2. Mock fetch with error mock data
    fetch.mockResolvedValueOnce(errorMockData)

    // 3. Simulate fetch data
    await expect(fetcher(mockUrl)).rejects.toThrow('Network response was not ok.')

    // 4. Fetch should be called once
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})
