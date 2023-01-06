import React from 'react';

function StyledButton(props) {
  const buttonStyle = {
    backgroundColor: '#F4CE14',
    color: 'black',
    adding: '10px 20px',
    fontSize: '18px',
    'border-radius': '20px',
    width: props.width,
    height:props.height,
  };

  return (
    <div>
      <button style={buttonStyle}>{props.name}</button>
    </div>
  );
}

export default StyledButton;
