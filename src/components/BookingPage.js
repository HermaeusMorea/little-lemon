import React from 'react';
import ShowReservedTables from './ShowReservedTables';
import { TablesProvider } from './TablesContext';
import FormikForm from './ChoosingTable';
function BookingPage(props){
    return(
    <div>
        <TablesProvider>
      <ShowReservedTables />
        <FormikForm/>
        </TablesProvider>
    </div>
   )
}

export default BookingPage;