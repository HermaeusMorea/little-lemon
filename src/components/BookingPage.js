import React from 'react';
import TableFilter from './ChooseTable';
function BookingPage(props){
    const tables = [
        {
        id: 1,
        date: '2023-01-02',
        time: 'breakfast',
        guests: 2
        },
        {
        id: 2,
        date: '2023-01-02',
        time: 'lunch',
        guests: 4
        },
        {
        id: 3,
        date: '2023-01-02',
        time: 'dinner',
        guests: 2
        },
        {
        id: 4,
        date: '2023-01-02',
        time: 'lunch',
        guests: 8
        },
        {
        id: 5,
        date: '2023-01-03',
        time: 'breakfast',
        guests: 6
        },
        {
        id: 6,
        date: '2023-01-03',
        time: 'lunch',
        guests: 2
        },
        {
        id: 7,
        date: '2023-01-03',
        time: 'dinner',
        guests: 4
        },
        {
        id: 8,
        date: '2023-01-03',
        time: 'breakfast',
        guests: 3
        },
        {
        id: 9,
        date: '2023-01-02',
        time: 'breakfast',
        guests: 4
        },
        {
        id: 10,
        date: '2023-01-02',
        time: 'lunch',
        guests: 2
        },
        {
        id: 11,
        date: '2023-01-02',
        time: 'dinner',
        guests: 6
        },
        {
        id: 12,
        date: '2023-01-03',
        time: 'breakfast',
        guests: 8
        }
      ];
    return(
    <div>
        <TableFilter tables={tables}/>
    </div>
   )
}

export default BookingPage;