const flipToNextPage = ({ currentMonth, setCurrentMonth, currentYear, setCurrentYear }) => {
  setCurrentYear(currentMonth < 11 ? currentYear : currentYear + 1)
  setCurrentMonth(currentMonth < 11 ? currentMonth + 1 : 0)
}

const flipToPrevPage = ({ currentMonth, setCurrentMonth, currentYear, setCurrentYear }) => {
  setCurrentYear(currentMonth == 0 ? currentYear - 1 : currentYear)
  setCurrentMonth(currentMonth == 0 ? 11 : currentMonth - 1)
}

export { flipToNextPage, flipToPrevPage }
