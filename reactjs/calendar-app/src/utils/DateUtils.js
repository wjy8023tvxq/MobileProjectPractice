export const generateYears = (start = 1900, end = 2100) => {
    const years = [];
    for (let i = start; i <= end; i++) {
        years.push(i);
    }
    return years;
};

export const generateMonths = () => {
    return Array.from({length: 12}, (_,i) => i + 1);
};

export const generateDates = (year, month) => {
    if (!year || !month) return [];
    return Array.from(
        {length: new Date(year, month, 0).getDate() },
        (_, i) => i + 1
    );
};

export const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
};

export const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
};

export const formatDate = (year, month, date) => {
    return `${month.toString().padStart(2, '0')}/${date.toString().padStart(2, '0')}/${year}`;
};

export const getDayOfWeek = (year, month, date) => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayIndex = new Date(year, month - 1, date).getDay();
    return daysOfWeek[dayIndex];
};