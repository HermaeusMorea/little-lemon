import { createContext, useState, useEffect } from 'react';

const TablesContext = createContext();

function TablesProvider({ children }) {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const storedTables = localStorage.getItem('tables');
    if (storedTables) {
      setTables(JSON.parse(storedTables));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tables', JSON.stringify(tables));
  }, [tables]);

  return (
    <TablesContext.Provider value={{ tables, setTables }}>
      {children}
    </TablesContext.Provider>
  );
}

export { TablesContext, TablesProvider };
