import React from 'react';
import LittlelemonIntro from './LittlelemonIntro';
import pic from './source/Logo3.jpg';
import './About.css';

function About() {
  return (
    <div className="reservation-card">
      <div className="left">
        <LittlelemonIntro />
      </div>
      <div className="right">
        <img alt="ResPic" src={pic} />
      </div>
    </div>
  );
}

export default About;
