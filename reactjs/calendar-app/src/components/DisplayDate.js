import React from "react";
import { formatDate, getDayOfWeek } from "../utils/DateUtils";

const DisplayDate = ({selectedDate}) => {
    const { year, month, date } = selectedDate;
    const formattedDate = formatDate(year, month, date);

    return (
        <div className="display-date">
            <h2>Selected Date: {formattedDate}</h2>
            <h3>Day of the Week: {getDayOfWeek(year, month, date)}</h3>
        </div>
    );
};

export default DisplayDate;