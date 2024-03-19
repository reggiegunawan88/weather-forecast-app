export class DateTimeHelpers {
  static convertToFullDate({ unix, shorthand }: { unix: number; shorthand?: boolean }) {
    return convertUnixTimestampToFullDate(unix, shorthand)
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

  // Create a new Date object
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

function convertUnixTimestampToAMPM(unixTimestamp: number) {
  // Convert Unix timestamp to milliseconds
  const milliseconds = unixTimestamp * 1000

  // Create a new Date object
  const date = new Date(milliseconds)

  // Get hours, minutes, and seconds from the date object
  let hours = date.getHours()
  const minutes = date.getMinutes()

  // Convert hours to AM/PM format
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours %= 12
  hours = hours || 12 // Handle midnight (0 hours)

  // Format the time string
  const timeString = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`

  return timeString
}
