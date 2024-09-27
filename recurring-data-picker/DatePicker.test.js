import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders the date picker component', () => {
    const { getByText } = render(<DatePicker />);
    expect(getByText('Select Date')).toBeInTheDocument();
  });

  it('updates the recurrence type', () => {
    const { getByText, getByLabelText } = render(<DatePicker />);
    const recurrenceTypeSelect = getByLabelText('Type');
    fireEvent.change(recurrenceTypeSelect, { target: { value: 'weekly' } });
    expect(getByText('Weekly')).toBeInTheDocument();
  });

  // add more unit tests for individual component logic

  it('renders the mini calendar with recurring dates', async () => {
    const { getByText } = render(<DatePicker />);
    const startDateInput = getByLabelText('Start Date');
    fireEvent.change(startDateInput, { target: { value: '2023-03-01' } });
    const endDateInput = getByLabelText('End Date');
    fireEvent.change(endDateInput, { target: { value: '2023-03-31' } });
    await waitFor(() => getByText('March 1, 2023'));
    expect(getByText('March 1, 2023')).toBeInTheDocument();
  });
});