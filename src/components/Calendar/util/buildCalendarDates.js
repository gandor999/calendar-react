export default function buildCalendarDates({ currentYear, currentMonth, currentDate }) {
  const calendarDates = []

  const firstDayOfDayOneOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const monthLastDate = new Date(currentYear, currentMonth, 0).getDate()
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // 18/09/2023 is the current date upon debugging
  // 31 - 5 + 1 = 27; 27 is the starting last days of the previous months
  for (let i = monthLastDate - firstDayOfDayOneOfMonth + 1; i <= monthLastDate; i++) {
    calendarDates.push(
      <li key={i + '-lastmoth'} className="is-not-current-dates">
        {i}
      </li>
    )
  }

  // get the current dates
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const isCurrentDay =
      i === currentDate.getDate() &&
      currentMonth === currentDate.getMonth() &&
      currentYear === currentDate.getFullYear()

    console.log(isCurrentDay ? i : '')

    calendarDates.push(
      <li key={i + '-currentMonth'} className={isCurrentDay ? ' active' : ''}>
        {i}
      </li>
    )
  }

  const tempLengthCalendar = calendarDates.length

  // get the next days of the month, set 42 as limit for 7 x 6 table
  for (let i = 1; i <= 42 - tempLengthCalendar; i++) {
    calendarDates.push(
      <li key={i + '-nextmonth'} className="is-not-current-dates">
        {i}
      </li>
    )
  }

  return calendarDates
}
