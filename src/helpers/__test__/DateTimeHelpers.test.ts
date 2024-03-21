import '@testing-library/jest-dom'
import { DateTimeHelpers } from '../DateTimeHelpers'

describe('DateTime Helpers function', () => {
  // Format: Monday, March 22, 2021 10:00 PM
  const mockUnixTimestamp = 1616425200

  test('Test convertToFullDate() output if shorthand argument is true', () => {
    const shorthand = true
    expect(DateTimeHelpers.convertToFullDate({ unix: mockUnixTimestamp, shorthand })).toEqual('Mon')
  })

  test('Test convertToFullDate() output if shorthand argument is empty', () => {
    const result = DateTimeHelpers.convertToFullDate({ unix: mockUnixTimestamp })

    // 1. Make sure result type is string
    expect(typeof result).toBe('string')

    // 2. Define expected parts of the date string
    const expectedDayOfWeek = 'Monday'
    const expectedMonth = 'March'
    const expectedDay = '22'
    const expectedYear = '2021'

    // 3. Make sure that result matches the expected format
    expect(result).toMatch(new RegExp(`${expectedDayOfWeek}, ${expectedMonth} ${expectedDay}, ${expectedYear}`))
  })

  test('Test convertTo24HrsFormat() output', () => {
    const result = DateTimeHelpers.convertTo24HrsFormat({ unix: mockUnixTimestamp })

    // 1. Define expected time format
    const expectedFormat = /^(0[0-9]|1[0-9]|2[0-3])$/

    // 2. Make sure result type is string
    expect(typeof result).toBe('string')

    // 3. Make sure result matches the expected format
    expect(result).toMatch(expectedFormat)
  })

  test('Test isPresentTime() output', () => {
    expect(DateTimeHelpers.isPresentTime({ unix: mockUnixTimestamp })).toBeFalsy()
  })

  test('isToday() should return true if the date is today', () => {
    // 1. Get today Unix timestamp
    const todayTimestamp = Math.floor(Date.now() / 1000)

    // 2. Make sure function is returning true
    expect(DateTimeHelpers.isToday({ unix: todayTimestamp })).toBeTruthy()
  })

  test('isToday() should return false if the date is not today', () => {
    expect(DateTimeHelpers.isToday({ unix: 1616425200 })).toBeFalsy()
  })
})
