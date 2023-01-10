import React from 'react';
import ShowReservedTables from './ShowReservedTables';
import FormikForm from './FormikForm';
function BookingPage(props){
    return(
    <div>
      <ShowReservedTables />
      <FormikForm/>
    </div>
   )
}

export default BookingPage;