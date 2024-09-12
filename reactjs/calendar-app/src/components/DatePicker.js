
import React from 'react';
import { generateYears, generateMonths, generateDates } from '../utils/DateUtils';

const DatePicker = ({ selectedDate, onDateChange }) => {
  const { year, month, date } = selectedDate;

  const handleYearChange = (e) => {
    onDateChange({ ...selectedDate, year: parseInt(e.target.value, 10) });
  };

  const handleMonthChange = (e) => {
    onDateChange({ ...selectedDate, month: parseInt(e.target.value, 10) });
  };

  const handleDateChange = (e) => {
    onDateChange({ ...selectedDate, date: parseInt(e.target.value, 10) });
  };

  console.log('Generated Months:', generateMonths());

  return (
    <div className="date-picker">
      <select value={year} onChange={handleYearChange}>
        {(generateYears() || []).map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      <select value={month} onChange={handleMonthChange}>
        {(generateMonths() || []).map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <select value={date} onChange={handleDateChange}>
        {(generateDates(year, month) || []).map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DatePicker;
