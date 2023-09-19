import onClickYear from './util/onClickYear'
import buildYears from './util/buildYears'
import './css/yearCalendar.css'

export default function yearCalendar(commonParams) {
  const { years, setYears, currentDate } = commonParams

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <div className="calendar-navigation">
          <span
            id="calendar-prev"
            className="material-symbols-rounded"
            onClick={() => {
              setYears(buildYears(years[1] - 10))
            }}
          >
            chevron_left
          </span>
          <p className="current-year">{years[1] + '-' + years[10]}</p>
          <span
            id="calendar-next"
            className="material-symbols-rounded"
            onClick={() => {
              setYears(buildYears(years[1] + 10))
            }}
          >
            chevron_right
          </span>
        </div>
      </header>

      <div className="calendar-body">
        <div className="years-calendar">
          <ul className="calendar-years">
            {years.map((year, i) => {
              const isCurrentYear = year === currentDate.getFullYear()

              return (
                <li
                  key={'list-item-' + year}
                  className={
                    'year' +
                    (isCurrentYear ? ' active' : '') +
                    (![0, 11].includes(i) ? ' decade' : '')
                  }
                  onClick={() => {
                    onClickYear({ ...commonParams, year })
                  }}
                >
                  <div>{year}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
