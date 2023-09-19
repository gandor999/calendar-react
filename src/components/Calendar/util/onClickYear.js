export default function onClickYear({
  activeYearCalendar,
  setActiveYearCalendar,
  setCurrentYear,
  currentYear,
  year,
}) {
  setActiveYearCalendar((activeYearCalendar = !activeYearCalendar))
  setCurrentYear((currentYear = year))
}
