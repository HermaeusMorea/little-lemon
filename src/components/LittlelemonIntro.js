import React from 'react';

function LittlelemonIntro() {
    const h1Style={
        fontFamily: "'Markazi Text'",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '64px',
        lineHeight: '77px',
        color: '#F4CE14',
    }
    const h2Style={
        fontFamily: "'Markazi Text'",
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '40px',
        lineHeight: '48px',
        color: '#EDEFEE',
    }
    const pStyle = {
        fontFamily: "'Karla'",
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '21px',
        color: '#FFFFFF',
        };
    return (
        <div className="littlelemon-intro">
        <div>
          <h1 style={h1Style} >Little lemon</h1>
          <h2 style={h2Style}>Chicago</h2>
          <p style={pStyle}>
          We are a family owned Mediterranean<br/>
          restaurant,focused on traditional recipes<br/>
           served with a modern twist. </p>
        </div>
      </div>
  );
}

export default LittlelemonIntro;
