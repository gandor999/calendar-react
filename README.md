# How to run

In the project directory, you can run:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## The Calendar component

The Calendar component can be found under `"./src/components/Calendar/Calendar.js"`

### params

As of righting this document the Calendar component does not have any parameters or will not be accepting any arguments.

### properties

| state variables     | type          | description                                                                                        |
| ------------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| currentYear         | int           | used to keep track of the current year                                                             |
| currentMonth        | int           | used to keep track of the current month                                                            |
| years               | [int]         | used to keep track of the years for the 4 x 4 table for displaying the years of the years calendar |
| activeMonthCalendar | bool          | used to keep track for when to render the months calendar                                          |
| activeYearCalendar  | bool          | used to keep track for when to render the years calendar                                           |
| commonParams        | object Object | used as a payload to pass down all the state variables down unto its children components           |
