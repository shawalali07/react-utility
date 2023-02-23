import React, { useState } from 'react';
import classNames from 'classnames';

// Define the days of the week and months of the year as constants
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS_OF_YEAR = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Define the Calendar component
const Calendar = ({ initialDate, onSelect }) => {
  // State variables to keep track of the current year and month
  const [year, setYear] = useState(initialDate.getFullYear());
  const [month, setMonth] = useState(initialDate.getMonth());

  // Function to move to the previous month
  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  // Function to move to the next month
  const nextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  // Calculate the number of days in the current month
  const numDays = new Date(year, month + 1, 0).getDate();

  // Calculate the day of the week on which the first day of the month falls
  const firstDay = new Date(year, month, 1).getDay();

  // Create an array of the days of the month
  const days = Array.from({ length: numDays }, (_, i) => i + 1);

  // Create an array of empty cells to fill up the first row of the calendar
  const blanks = Array.from({ length: firstDay }, (_, i) => '');

  // Concatenate the blanks and days arrays to create the final calendar
  const calendar = [...blanks, ...days];

  // Function to handle click events on calendar cells
  const handleClick = (day) => {
    const date = new Date(year, month, day);
    onSelect(date);
  };

  // Define the calendar header with navigation buttons
  const header = (
    <div className='flex justify-between mb-4'>
      <button
        className='px-4 py-2 rounded-full hover:bg-gray-200'
        onClick={prevMonth}
      >
        &lt;
      </button>
      <h2 className='text-lg font-semibold'>
        {MONTHS_OF_YEAR[month]} {year}
      </h2>
      <button
        className='px-4 py-2 rounded-full hover:bg-gray-200'
        onClick={nextMonth}
      >
        &gt;
      </button>
    </div>
  );

  // Define the calendar body with the days of the month
  const body = (
    <div className='grid grid-cols-7 gap-2'>
      {DAYS_OF_WEEK.map((day) => (
        <div key={day} className='text-center font-semibold text-gray-500'>
          {day}
        </div>
      ))}
      {calendar.map((day, i) => (
        <div
          key={i}
          className={classNames(
            'text-center py-2 rounded-full',
            day === '' ? 'bg-gray-200' : 'hover:bg-gray-200 cursor-pointer',
            day === initialDate.getDate() && month === initialDate.getMonth()
              ? 'bg-blue-500 text-white'
              : 'text-gray-700'
          )}
          onClick={() => handleClick(day)}
        >
          {day}
        </div>
      ))}
    </div>
  );

  // Return the final calendar component
  return (
    <div className='bg-white shadow rounded-lg p-4'>
      {header}
      {body}
    </div>
  );
};

export default Calendar;
