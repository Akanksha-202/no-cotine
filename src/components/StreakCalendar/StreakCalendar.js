import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './StreakCalender.css'; // Import your custom CSS file

const StreakCalendar = ({ isLoggedIn }) => {
  const [date, setDate] = useState(new Date());

  const getTileClassName = ({ date, view }) => {
    if (isLoggedIn) {
      // Check if the date is in the future
      if (date > new Date()) {
        return "future-date"; // Apply a class for future dates
      } else {
        return "logged-in-date"; // Apply a class for logged-in dates
      }
    } else {
      return ""; // No special class for non-logged-in users
    }
  };

  return (
    <div>
      <h2>Streak Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={getTileClassName}
      />
    </div>
  );
};

export default StreakCalendar;
