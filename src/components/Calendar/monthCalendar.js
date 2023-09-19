import { nameOfMonths } from './constants'
import onClickMonth from './util/onClickMonth'
import onClickYear from './util/onClickYear'
import './css/monthCalendar.css'

export default function monthCalendar(commonParams) {
  const { currentYear, setCurrentYear, currentDate } = commonParams

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <div className="calendar-navigation">
          <span
            id="calendar-prev"
            className="material-symbols-rounded"
            onClick={() => {
              setCurrentYear(currentYear - 1)
            }}
          >
            chevron_left
          </span>
          <p
            className="current-year"
            onClick={() => onClickYear({ ...commonParams, year: currentYear })}
          >
            {currentYear}
          </p>
          <span
            id="calendar-next"
            className="material-symbols-rounded"
            onClick={() => {
              setCurrentYear(currentYear + 1)
            }}
          >
            chevron_right
          </span>
        </div>
      </header>

      <div className="calendar-body">
        <div className="months-calendar">
          <ul className="calendar-months">
            {nameOfMonths.map(nameOfMonth => {
              const isCurrentMonth =
                nameOfMonths.indexOf(nameOfMonth) === currentDate.getMonth() &&
                currentYear === currentDate.getFullYear()

              return (
                <li
                  key={'list-item-' + nameOfMonth}
                  className={'name-of-month' + (isCurrentMonth ? ' active' : '')}
                  onClick={() => {
                    onClickMonth({ ...commonParams, nameOfMonth })
                  }}
                >
                  <div>{nameOfMonth.slice(0, 3)}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
