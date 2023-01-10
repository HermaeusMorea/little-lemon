import React from 'react';
import ShowReservedTables from './ShowReservedTables';
import FormikForm from './ChoosingTable';
function BookingPage(props){
    return(
    <div>
      <ShowReservedTables />
      <FormikForm/>
    </div>
   )
}

export default BookingPage;