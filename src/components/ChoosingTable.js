import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TablesContext } from './TablesContext';
import { useContext } from 'react';
import './ChoosingTable.css'
const FormikForm = () => {
  const { tables, setTables } = useContext(TablesContext);
  const tableOptions = [
    { value: 1, label: 'Table 1' },
    { value: 2, label: 'Table 2' },
    { value: 3, label: 'Table 3' },
    { value: 4, label: 'Table 4' },
    { value: 5, label: 'Table 5' },
  ];


const timeOptions = [
  { value: '17:00', label: '17:00' },
  { value: '18:00', label: '18:00' },
  { value: '19:00', label: '19:00' },
  { value: '20:00', label: '20:00' },
  { value: '21:00', label: '21:00' },
  { value: '22:00', label: '22:00' },
];


  const formik = useFormik({
    initialValues: {
      date: '',
      time: 'select',
      guests: 1,
      table: 1,
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Required'),
      time: Yup.string()
    .required('Required')
    .test('time', 'Please select a valid time', function (value) {
      return value !== 'select';
    }),
      guests: Yup.number().required('Required').min(1).max(10),
      table: Yup.string().required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required').matches(/^\d{10}$/, 'Must be a valid phone number'),
    }),
    onSubmit: (values,) => {
        setTables([...tables, { id: `${values.table}${values.date}${values.time}`, tablenumber: values.table, date: values.date, time: values.time }]);
        formik.setSubmitting(false);
        alert("Reservation Succeed");
        formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='grid'>
      <label htmlFor="date" className='date'>Date:
        <input type="date" {...formik.getFieldProps('date')} />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
      </label>

      <label htmlFor="time" className='time'>Time:
        <select {...formik.getFieldProps('time')}>
        <option key="select" value="select">
                select
        </option>
          {timeOptions
            .filter((option) => {
              const exists = tables.some(table => table.id === `${formik.values.table}${formik.values.date}${option.value}`);
              if (!exists) {
                return true;
              } else {
                return false;
              }
            })
            .map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div>{formik.errors.time}</div>
        ) : null}
      </label>


      <label htmlFor="guests" className='guests'>Number of Guests:
        <input type="number" {...formik.getFieldProps('guests')} min="1" max="10" />
        {formik.touched.guests && formik.errors.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}
      </label>


      <label htmlFor="table" className='table'>Table:
        <select {...formik.getFieldProps('table')}>
          {tableOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>))}
        </select>
        {formik.touched.table && formik.errors.table ? (
          <div>{formik.errors.table}</div>
        ) : null}
      </label>

      <h2>How may we contact you?</h2>
      <label htmlFor="firstName" className='FirstName'>First Name
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </label>
      {formik.errors.firstName && formik.touched.firstName ? <div className='FnameErr'>{formik.errors.firstName}</div> : null}
      <label htmlFor="lastName" className='LastName'>Last Name
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName
          }
        />
      </label>
      {formik.errors.lastName && formik.touched.lastName ? <div className='LnameErr'>{formik.errors.lastName}</div> : null}
      <label htmlFor="phoneNumber" className='Phone'>Phone Number
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber ? <div className='PhoneErr'>{formik.errors.phoneNumber}</div> : null}
      </label>
      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default FormikForm;

