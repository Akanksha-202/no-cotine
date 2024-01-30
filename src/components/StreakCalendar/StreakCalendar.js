import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StreakCalendar = () => {
  const [date, setDate] = useState(new Date());
  
  const handleDayClick = (selectedDate) => {
    // Handle logic for marking a day as part of the streak
    // Example: markDayInStreak(selectedDate);
  };

  return (
    <div>
      <h2>Streak Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={handleDayClick}
      />
    </div>
  );
};

export default StreakCalendar;
