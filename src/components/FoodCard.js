import React from 'react';
import './FoodCard.css';

function FoodCard(props) {
  return (
    <div className="food-card">
      <div className="food-card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="food-card-text">
        <h2>{props.name}</h2>
        <h3>${props.price}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default FoodCard;
