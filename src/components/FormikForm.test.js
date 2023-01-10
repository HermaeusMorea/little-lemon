import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormikForm from './FormikForm';
import { TablesProvider, TablesContext } from './TablesContext';

describe('FormikForm', () => {
  it('submits the form with valid values', async () => {
    const tables = [];
    const setTables = jest.fn();
    const value = { tables, setTables }
    jest.spyOn(React, 'useContext').mockImplementation(() => value)
    render(
      <TablesProvider>
        <FormikForm />
      </TablesProvider>
    );
    const dateInput = screen.getByLabelText('Date:', { selector: 'input' });
    const timeSelect = screen.getByLabelText('Time:', { selector: 'select' });
    const guestsInput = screen.getByLabelText('Number of Guests:', { selector: 'input' });
    const tableSelect = screen.getByLabelText('Table:', { selector: 'select' });
    const firstNameInput = screen.getByLabelText('First Name', { selector: 'input' });
    const lastNameInput = screen.getByLabelText('Last Name', { selector: 'input' });
    const phoneNumberInput = screen.getByLabelText('Phone Number', { selector: 'input' });
    const submitButton = screen.getByText('Submit');

    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(tableSelect, { target: { value: '1' } });
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
   
    fireEvent.change(phoneNumberInput, { target: { value: '1234567890' } });
    fireEvent.click(submitButton);

    expect(dateInput.value).toBe('2022-01-01');
    expect(timeSelect.value).toBe('17:00');
    expect(guestsInput.value).toBe('4');
    expect(tableSelect.value).toBe('1');
    expect(firstNameInput.value).toBe('John');
    expect(lastNameInput.value).toBe('Doe');
    expect(phoneNumberInput.value).toBe('1234567890');
  });
});
