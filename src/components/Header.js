import React from 'react';
import LittlelemonIntro from './LittlelemonIntro';
import StyledButton from './StyledButton';
import pic from './source/ReservationPic.jpg';
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="reservation-card">
      <div className="left">
        <LittlelemonIntro />
        <Link to='/BookingPage'>
        <StyledButton name='Reserve a table' width='220px' height="67px"/>
        </Link>
      </div>
      <div className="right">
        <img alt="ResPic" src={pic} />
      </div>
    </div>
  );
}

export default Header;
