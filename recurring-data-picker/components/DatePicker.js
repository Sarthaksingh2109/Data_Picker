import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import RecurrenceOptions from './RecurrenceOptions';
import MiniCalendar from './MiniCalendar';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [recurrence, setRecurrence] = useState({
    type: 'daily',
    every: 1,
    specificDays: [],
    nthDay: null,
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const { updateRecurringDates } = useStore();

  useEffect(() => {
    updateRecurringDates(recurrence, startDate, endDate);
  }, [recurrence, startDate, endDate, updateRecurringDates]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleRecurrenceChange = (type, every, specificDays, nthDay) => {
    setRecurrence({ type, every, specificDays, nthDay });
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Select Date</label>
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => handleDateChange(new Date(e.target.value))}
          className="w-full px-4 py-2 text-sm text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Recurrence</label>
        <RecurrenceOptions
          recurrence={recurrence}
          onRecurrenceChange={handleRecurrenceChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Start Date</label>
        <input
          type="date"
          value={startDate.toISOString().split('T')[0]}
          onChange={(e) => handleStartDateChange(new Date(e.target.value))}
          className="w-full px-4 py-2 text-sm text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">End Date (optional)</label>
        <input
          type="date"
          value={endDate ? endDate.toISOString().split('T')[0] : ''}
          onChange={(e) => handleEndDateChange(new Date(e.target.value))}
          className="w-full px-4 py-2 text-sm text-gray-700"
        />
      </div>
      <MiniCalendar selectedDate={selectedDate} />
    </div>
  );
};

export default DatePicker;