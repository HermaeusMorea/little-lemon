import React from 'react';
import './App.css';
import MetaTags from './components/MetaTags';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import SpecialMenuCard from './components/SpecialMenuCard';
import { TablesProvider } from './components/TablesContext';

function App() {
  return (
    <TablesProvider>
      <div className="App">
        <MetaTags />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/BookingPage" element={<BookingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<SpecialMenuCard />} />
          <Route path="/Reservation" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </TablesProvider>
  );
}

export default App;
