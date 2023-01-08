import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ChooseTable.css'
function TableFilter(props) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);
  const [table, setTable] = useState('')
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      additionalInfo: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required').matches(/^\d{10}$/, 'Must be a valid phone number'),
    }),
    onSubmit: values => {
      alert(`Table ${table} Reservation Succeeded!`);
    },
  });

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  }

  const handleTableChange = (event) => {
    setTable(event.target.value);
  }
  const filteredTables = props.tables.filter(table => {
    return table.date === date && table.time === time && table.guests >= guests;
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="Form">
        <h1 className='Title'>Reserve A Table</h1>
        <label className='Date'>
          Date:
          <select value={date} onChange={handleDateChange}>
            <option value="">Select a date</option>
            <option value="2023-01-02">January 2, 2023</option>
            <option value="2023-01-03">January 3, 2023</option>
          </select>
        </label>
        <label className='Time'>
          Time:
          <select value={time} onChange={handleTimeChange}>
            <option value="">Select a time</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </label>
        <label className='NumberOfGuest'>
          GuestsNumber:
          <input type="number" value={guests} onChange={handleGuestsChange} />
        </label>

        <label className='Tables'>
          Tables
          <select value={table} onChange={handleTableChange}>
            {filteredTables.map(table => {
              return (
                <option key={table.id} value={table.id}>
                  Table {table.id}: {table.guests} guests, {table.date} {table.time}
                </option>
              );
            })}
          </select>
        </label>
        <div className='Contact'>
          <h1>How may we contact you?</h1>
          <div className='NamePhone'>
          <label htmlFor="firstName" className='FirstName'>First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && formik.touched.firstName ? <div>{formik.errors.firstName}</div> : null}
          <label htmlFor="lastName" className='lastName'>Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName
            }
          />
          {formik.errors.lastName && formik.touched.lastName ? <div>{formik.errors.lastName}</div> : null}
          <label htmlFor="phoneNumber" className='PhoneNumber'>Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
          <br/>
          </div>
          <button type="submit" className='submitbutton'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TableFilter;
