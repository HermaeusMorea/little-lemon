import React from 'react';
import LittlelemonIntro from './LittlelemonIntro';
import StyledButton from './StyledButton';
import pic from './source/ReservationPic.jpg';
import './ReservationCard.css';

function ReservationCard() {
  return (
    <div className="reservation-card">
      <div className="left">
        <LittlelemonIntro />
        <StyledButton name='Reserve a table' width='220px' height="67px"/>
      </div>
      <div className="right">
        <img alt="ResPic" src={pic} />
      </div>
    </div>
  );
}

export default ReservationCard;
