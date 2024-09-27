import { createStore } from 'zustand';

const store = createStore((set) => ({
  recurringDates: [],
  updateRecurringDates: (recurrence, startDate, endDate) => {
    // Update the recurring dates based on the recurrence options
    // and the start and end dates
    set({ recurringDates: [] });
  },
}));

export default store;