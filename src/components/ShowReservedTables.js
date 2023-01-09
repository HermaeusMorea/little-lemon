import { TablesContext } from './TablesContext';
import { useContext} from 'react';
import './ShowReservedTables.css'
function ShowReservedTables() {
  const { tables} = useContext(TablesContext);


  return (
    <div className="grid">
      <h2>Reserved Tables:</h2>
      <ul>
        {[...tables].map((table) => (
          <li key={table.id}>{table.tablenumber}th Table on {table.date} from {table.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowReservedTables;