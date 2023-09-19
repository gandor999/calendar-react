export default function buildYears(currentYear) {
  const yearsNotGrayed = []

  const currentYearString = currentYear.toString()

  // e.i 2018 -- get last number 8 then 2018 - 8 = 2010
  const baseYear = currentYear - parseInt(currentYearString[currentYearString.length - 1])

  // e.i 2010 to 2019
  for (let i = 0; i < 10; i++) {
    yearsNotGrayed.push(baseYear + i)
  }

  // [2009, 2010 to 2019, 2020]
  return [yearsNotGrayed[0] - 1, ...yearsNotGrayed, yearsNotGrayed[yearsNotGrayed.length - 1] + 1]
}
