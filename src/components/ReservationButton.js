import React from 'react';

function ReservationButton() {
  const buttonStyle = {
    backgroundColor: '#F4CE14',
    color: 'black',
    adding: '10px 20px',
    fontSize: '18px',
    'border-radius': '20px',
    width: '220px',
    height: '67px',
  };

  return (
    <div>
      <button style={buttonStyle}>Reserve a table</button>
    </div>
  );
}

export default ReservationButton;
