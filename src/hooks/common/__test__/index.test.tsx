import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import useGeolocation from '../useGeolocation'

describe('Test useGeolocation custom hooks', () => {
  test('useGeoLocation hooks success', () => {
    // 1. Mock navigator geolocation success output
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 51.1,
              longitude: 45.3,
            },
          })
        )
      ),
    }
    // @ts-ignore
    global.navigator.geolocation = mockGeolocation

    // 2. Define the custom hooks
    const { result } = renderHook(() => useGeolocation())
    const { latitude, longitude, locationEnabled } = result.current

    // 3. All returned value should be exist and locationEnabled is true
    expect(latitude).toEqual(51.1)
    expect(longitude).toEqual(45.3)
    expect(locationEnabled).toBeTruthy()
  })

  test('useGeoLocation hooks error', () => {
    // 1. Mock navigator geolocation error output
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success, error) => error(new Error('Location permission is denied'))),
    }
    // @ts-ignore
    global.navigator.geolocation = mockGeolocation

    // 2. Define the custom hooks
    const { result } = renderHook(() => useGeolocation())
    const { locationEnabled } = result.current

    // 3. locationEnabled value should be false
    expect(locationEnabled).toBeFalsy()
  })
})
