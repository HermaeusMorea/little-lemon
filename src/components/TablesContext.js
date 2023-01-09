import { createContext, useState } from 'react';

const TablesContext = createContext();

function TablesProvider({ children }) {
  const [tables, setTables] = useState([
    {
      id: `${'1'}${'2023-01-01'}${'17:00'}`,
      tablenumber:1,
      date: '2023-01-01',
      time: '17:00',
    },
    {
      id: `${'4'}${'2023-01-02'}${'18:00'}`,
      tablenumber:4,
      date: '2022-01-02',
      time: '18:00',
    },
  ]);

  return (
    <TablesContext.Provider value={{ tables, setTables }}>
      {children}
    </TablesContext.Provider>
  );
}

export { TablesContext, TablesProvider };
