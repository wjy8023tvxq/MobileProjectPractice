import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Calendar from './components/Calendar';
import DatePicker from './components/DatePicker';
import DisplayDate from  './components/DisplayDate';

const App = () => {
  const [selectedDate, setSelectedDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  });

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className='App'>
      <h1>Calendar</h1>
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      <DisplayDate selectedDate={selectedDate} />
      <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
    </div>
  );
}


export default App;
