import { useState } from 'react'
import './Calendar.css'
import datesCalendar from './datesCalendar'
import monthCalendar from './monthCalendar'
import yearCalendar from './yearCalendar'

export default function Calendar({ params }) {
  const [activeMonthCalendar, setActiveMonthCalendar] = useState(false)
  const [activeYearCalendar, setActiveYearCalendar] = useState(false)

  const commonParams = {
    ...params,
    activeMonthCalendar,
    setActiveMonthCalendar,
    activeYearCalendar,
    setActiveYearCalendar,
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
