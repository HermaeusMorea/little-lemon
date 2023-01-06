import React from 'react';
import LittlelemonIntro from './LittlelemonIntro';
import ReservationButton from './ReservationButton';
import pic from './source/ReservationPic.jpg';
import './ReservationCard.css';

function ReservationCard() {
  return (
    <div className="reservation-card">
      <div className="left">
        <LittlelemonIntro />
        <ReservationButton />
      </div>
      <div className="right">
        <img alt="ResPic" src={pic} />
      </div>
    </div>
  );
}

export default ReservationCard;
