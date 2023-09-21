import { useState } from 'react'
import './App.css'
import Calendar from './components/Calendar/Calendar'
import buildYears from './components/Calendar/util/buildYears'

function App() {
  const [clickedDay, setClickedDay] = useState([])

  const currentDate = new Date()

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [years, setYears] = useState(buildYears(currentYear))

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="date"
            onChange={e => {
              const temp = e.target.value
                .split('-')
                .reverse()
                .map(e => parseInt(e))
              temp[1] -= 1
              setClickedDay(temp)
              setCurrentMonth(temp[1])
              setCurrentYear(temp[2])
            }}
          />
          <Calendar
            params={{
              clickedDay,
              setClickedDay,
              currentDate,
              currentYear,
              setCurrentYear,
              currentMonth,
              setCurrentMonth,
              years,
              setYears,
            }}
          />
        </div>
      </header>
    </div>
  )
}

export default App
