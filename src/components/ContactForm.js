import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactForm'

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required').matches(/^\d{10}$/, 'Must be a valid phone number'),
    }),
    onSubmit: values => {
      alert('Reservation Succeeded!');
    },
  });

  return (
    <div className='Contact'>
    <form onSubmit={formik.handleSubmit}>
      <h1>How may we contact you?</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName && formik.touched.firstName ? <div>{formik.errors.firstName}</div> : null}
      <br />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName
}
/>
{formik.errors.lastName && formik.touched.lastName ? <div>{formik.errors.lastName}</div> : null}
<label htmlFor="phoneNumber">Phone Number</label>
<input
     id="phoneNumber"
     name="phoneNumber"
     type="text"
     onChange={formik.handleChange}
     value={formik.values.phoneNumber}
   />
{formik.errors.phoneNumber && formik.touched.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
<button type="submit">Submit</button>
</form>
</div>
);
};

export default ContactForm;