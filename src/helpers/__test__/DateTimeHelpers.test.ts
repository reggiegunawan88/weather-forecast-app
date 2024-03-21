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
    expect(DateTimeHelpers.convertToFullDate({ unix: mockUnixTimestamp })).toEqual('Monday, March 22, 2021')
  })

  test('Test convertTo24HrsFormat() output', () => {
    expect(DateTimeHelpers.convertTo24HrsFormat({ unix: mockUnixTimestamp })).toEqual('22')
  })

  test('Test isPresentTime() output', () => {
    expect(DateTimeHelpers.isPresentTime({ unix: mockUnixTimestamp })).toBeFalsy()
  })

  test('Test isToday() output', () => {
    expect(DateTimeHelpers.isToday({ unix: mockUnixTimestamp })).toBeFalsy()
  })
})
