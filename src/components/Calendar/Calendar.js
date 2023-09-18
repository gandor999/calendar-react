import { useState } from 'react'
import './Calendar.css'

const nameOfMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const buildCalendarDates = (currentYear, currentMonth) => {
  const calendarDates = []

  const firstDayOfDayOneOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const monthLastDate = new Date(currentYear, currentMonth, 0).getDate()
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // 18/09/2023 is the current date upon debugging
  // 31 - 5 + 1 = 27; 27 is the starting last days of the previous months
  for (let i = monthLastDate - firstDayOfDayOneOfMonth + 1; i <= monthLastDate; i++) {
    calendarDates.push(
      <li key={i + '-lastmoth'} className="isNotCurrentDate">
        {i}
      </li>
    )
  }

  // get the current dates
  for (let i = 1; i <= lastDateOfMonth; i++) {
    calendarDates.push(<li key={i + '-currentMonth'}>{i}</li>)
  }

  const tempLengthCalendar = calendarDates.length

  // get the next days of the month, set 42 as limit for 7 x 6 table
  for (let i = 1; i <= 42 - tempLengthCalendar; i++) {
    calendarDates.push(
      <li key={i + '-nextmonth'} className="isNotCurrentDate">
        {i}
      </li>
    )
  }

  return calendarDates
}

const flipToNextMonth = ({ currentMonth, setCurrentMonth, currentYear, setCurrentYear }) => {
  setCurrentYear((currentYear = currentMonth < 11 ? currentYear : currentYear + 1))
  setCurrentMonth((currentMonth = currentMonth < 11 ? currentMonth + 1 : 0))
}

const flipToPrevMonth = ({ currentMonth, setCurrentMonth, currentYear, setCurrentYear }) => {
  setCurrentYear((currentYear = currentMonth == 0 ? currentYear - 1 : currentYear))
  setCurrentMonth((currentMonth = currentMonth == 0 ? 11 : currentMonth - 1))
}

export default function Calendar(params) {
  const currentDate = new Date()

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())

  console.log(currentMonth)

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <div className="calendar-navigation">
          <span
            id="calendar-prev"
            className="material-symbols-rounded"
            onClick={() =>
              flipToPrevMonth({ currentMonth, setCurrentMonth, currentYear, setCurrentYear })
            }
          >
            chevron_left
          </span>
          <p id='name-of-month'>{nameOfMonths[currentMonth]}</p>
          <p id='current-year'>{currentYear}</p>
          <span
            id="calendar-next"
            className="material-symbols-rounded"
            onClick={() =>
              flipToNextMonth({ currentMonth, setCurrentMonth, currentYear, setCurrentYear })
            }
          >
            chevron_right
          </span>
        </div>
      </header>

      <div className="calendar-body">
        <ul className="calendar-weekdays">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="calendar-dates">{buildCalendarDates(currentYear, currentMonth)}</ul>
      </div>
    </div>
  )
}
