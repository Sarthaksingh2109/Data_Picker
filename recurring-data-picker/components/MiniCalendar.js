import React from 'react';

const MiniCalendar = ({ selectedDate }) => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center">
      {days.map((day) => (
        <div
          key={day}
          className={`w-8 h-8 flex justify-center items-center ${
            day === selectedDate.getDate() ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default MiniCalendar;