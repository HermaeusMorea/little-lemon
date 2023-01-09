import React from 'react';
import SpecialMenuCard from './SpecialMenuCard';
import TestimonialsCard from './TestimonialsCard';
import About from './About';
import Header from './Header.js'
function Main() {
  return (
    <div>
      <Header/>
      <TestimonialsCard/>
      <About/>
    </div>
  );
}

export default Main;
