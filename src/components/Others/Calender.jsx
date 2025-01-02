import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'; // Custom styles

const App = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <div className="calendar-container ">
      <h1 className="calendar-title">My Custom Calendar</h1>
      <Calendar
        onChange={handleChange}
        value={date}
        className="custom-calendar"
      />
      <p className="selected-date">Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default App;
