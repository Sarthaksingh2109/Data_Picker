import React from 'react';

const RecurrenceOptions = ({ recurrence, onRecurrenceChange }) => {
  const handleTypeChange = (e) => {
    onRecurrenceChange(e.target.value, recurrence.every, recurrence.specificDays, recurrence.nthDay);
  };

  const handleEveryChange = (e) => {
    onRecurrenceChange(recurrence.type, e.target.value, recurrence.specificDays, recurrence.nthDay);
  };

  const handleSpecificDaysChange = (e) => {
    onRecurrenceChange(recurrence.type, recurrence.every, e.target.value, recurrence.nthDay);
  };

  const handleNthDayChange = (e) => {
    onRecurrenceChange(recurrence.type, recurrence.every, recurrence.specificDays, e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Type</label>
        <select
          value={recurrence.type}
          onChange={handleTypeChange}
          className="w-full px-4 py-2 text-sm text-gray-700"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Every</label>
        <input
          type="number"
          value={recurrence.every}
          onChange={handleEveryChange}
          className="w-full px-4 py-2 text-sm text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Specific Days</label>
        <input
          type="text"
          value={recurrence.specificDays.join(', ')}
          onChange={handleSpecificDaysChange}
          className="w-full px-4 py-2 text-sm text-gray-700"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Nth Day</label>
        <input
          type="number"
          value={recurrence.nthDay}
          onChange={handleNthDayChange}
          className="w-full px-4 py-2 text-sm text-gray-700"
        />
      </div>
    </div>
  );
};

export default RecurrenceOptions;