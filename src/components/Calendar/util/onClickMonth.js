import { nameOfMonths } from '../constants'

export default function onClickMonth({
  activeMonthCalendar,
  setActiveMonthCalendar,
  currentMonth,
  setCurrentMonth,
  nameOfMonth,
}) {
  setActiveMonthCalendar((activeMonthCalendar = !activeMonthCalendar))
  setCurrentMonth((currentMonth = nameOfMonths.indexOf(nameOfMonth)))
}
