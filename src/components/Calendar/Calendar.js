import { useState } from 'react'
import './Calendar.css'
import datesCalendar from './datesCalendar'
import monthCalendar from './monthCalendar'
import yearCalendar from './yearCalendar'
import buildYears from './util/buildYears'

export default function Calendar() {
  const currentDate = new Date()

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [years, setYears] = useState(buildYears(currentYear))

  const [activeMonthCalendar, setActiveMonthCalendar] = useState(false)
  const [activeYearCalendar, setActiveYearCalendar] = useState(false)

  const commonParams = {
    currentDate,
    currentMonth,
    setCurrentMonth,
    currentYear,
    setCurrentYear,
    activeMonthCalendar,
    setActiveMonthCalendar,
    activeYearCalendar,
    setActiveYearCalendar,
    years,
    setYears,
  }

  return (
    <>
      {activeYearCalendar
        ? yearCalendar(commonParams)
        : activeMonthCalendar
        ? monthCalendar(commonParams)
        : datesCalendar(commonParams)}
    </>
  )
}
