import React from 'react';
import './App.css';
import MetaTags from './components/MetaTags';
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <MetaTags/>
      <Nav/>
      <Main/>
      <Header/>
      <Footer/>
    </div>
  ); 
}

export default App;
