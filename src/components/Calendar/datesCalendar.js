import { nameOfMonths } from './constants'
import { flipToNextPage, flipToPrevPage } from './util/flipPages'
import buildCalendarDates from './util/buildCalendarDates'
import onClickMonth from './util/onClickMonth'
import onClickYear from './util/onClickYear'
import { daysOfWeeks } from './constants'

export default function datesCalendar(commonParams) {
  const { currentMonth, currentYear } = commonParams

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <div className="calendar-navigation">
          <span
            id="calendar-prev"
            className="material-symbols-rounded"
            onClick={() => flipToPrevPage(commonParams)}
          >
            chevron_left
          </span>
          <p className="name-of-month" onClick={() => onClickMonth(commonParams)}>
            {nameOfMonths[currentMonth].slice(0, 3)}
          </p>
          <p
            className="current-year"
            onClick={() => onClickYear({ ...commonParams, year: currentYear })}
          >
            {currentYear}
          </p>
          <span
            id="calendar-next"
            className="material-symbols-rounded"
            onClick={() => flipToNextPage(commonParams)}
          >
            chevron_right
          </span>
        </div>
      </header>

      <div className="calendar-body">
        <div className="dates-calendar">
          <ul className="calendar-weekdays">
            {daysOfWeeks.map(day => (
              <li>{day}</li>
            ))}
          </ul>
          <ul className="calendar-dates">{buildCalendarDates(commonParams)}</ul>
        </div>
      </div>
    </div>
  )
}
