import React from "react";
import { getFirstDayOfMonth, getDaysInMonth } from "../utils/DateUtils";
import './Calendar.css';

const Calendar = ({selectedDate, onDateChange}) => {
    const { year, month, date} = selectedDate;

    const generateCalendarCells = () => {
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);
        const calendarCells = [];

        // Assign empty cells for day slots before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarCells.push(<div key = {`empty-${i}`} className="calendar-cell empty"></div>);
        }

        // Set cells for each day of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const isSelected = i === date;
            const isToday = 
            date === new Date().getDate && 
            month === new Date().getMonth() + 1 &&
            year === new Date().getFullYear();

            // Add cells to calendar
            calendarCells.push(
                <div key={i} 
                className={`calendar-cell ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
                onClick={() => onDateChange({ year, month, date: i })}>
                {i}
                </div>
            );
        }
        return calendarCells;
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className="calendar-grid">{generateCalendarCells()}</div>
        </div>
    )
};
export default Calendar;