export class DateTimeHelpers {
  static convertToFullDate({ unix, shorthand }: { unix: number; shorthand?: boolean }) {
    return convertUnixTimestampToFullDate(unix, shorthand)
  }

  static convertTo24HrsFormat({ unix }: { unix: number }) {
    return convertUnixTimestampTo24Hrs(unix)
  }

  static isPresentTime({ unix }: { unix: number }) {
    return determinePresentTime(unix)
  }

  static isToday({ unix }: { unix: number }) {
    return determineIsToday(unix)
  }

  static isDaytime() {
    return determineIsDaytime()
  }
}

/**
 * Convert unix timestamp into full date format
 * @input : 1616425200
 * @returns : Monday, March 22, 2021 or Mon (if shorthand is true)
 */
function convertUnixTimestampToFullDate(unixTimestamp: number, short?: boolean): string {
  // Convert Unix timestamp to milliseconds
  const milliseconds = unixTimestamp * 1000
  const date = new Date(milliseconds)

  // Options for formatting the date
  let options: Intl.DateTimeFormatOptions = {}

  if (short) {
    options = {
      weekday: 'short', // Short name of the day of the week (e.g., "Mon")
    }
  } else {
    options = {
      weekday: 'long', // Full name of the day of the week (e.g., "Monday")
      month: 'long', // Full name of the month (e.g., "January")
      year: 'numeric', // Four-digit representation of the year
      day: 'numeric', // Two-digit representation of the day of the month
    }
  }

  // Format the date using toLocaleDateString with the specified options
  const formattedDate = date.toLocaleDateString('en-US', options)
  return formattedDate
}

/**
 * Convert unix timestamp into 2 digit 24hrs time format
 * @input: 1616425200 (in ISO format: 2021-03-22T10:00:00Z)
 * @returns : 10 | 15 | 22 , etc
 */
function convertUnixTimestampTo24Hrs(unixTimestamp: number): string {
  // Convert Unix timestamp to milliseconds
  const milliseconds = unixTimestamp * 1000
  const date = new Date(milliseconds)

  // Get hours from the date object
  const hours = ('0' + date.getHours()).slice(-2) // Ensure two digits

  return hours
}

function determinePresentTime(unix: number): boolean {
  // Get the current hour and Unix timestamp hour
  const currentHour = new Date().getHours()
  const timestampHour = new Date(unix * 1000).getHours()

  // Return true if both hours are the same
  return currentHour === timestampHour
}

function determineIsToday(unix: number): boolean {
  // Convert Unix timestamp to milliseconds
  const milliseconds = unix * 1000

  // Create Date objects for the current date and the date derived from the Unix timestamp
  const currentDate = new Date()
  const timestampDate = new Date(milliseconds)

  // Compare the year, month, and day parts of the dates
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  const timestampYear = timestampDate.getFullYear()
  const timestampMonth = timestampDate.getMonth()
  const timestampDay = timestampDate.getDate()

  // Return true if the dates are the same, indicating that the timestamp is for today
  return currentYear === timestampYear && currentMonth === timestampMonth && currentDay === timestampDay
}

function determineIsDaytime() {
  const hours = new Date().getHours()

  return hours >= 6 && hours < 18
}
