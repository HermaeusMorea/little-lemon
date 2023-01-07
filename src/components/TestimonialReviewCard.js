import React from 'react';
import './TestimonialReviewCard.css'
function TestimonialReviewCard(props) {
  return (
    <div className="testimonial-card">
      <img src={props.customer.photo} alt="Customer's Profile"/>
      <h3>{props.customer.name}</h3>
      <p className="rating">{props.customer.rating}</p>
      <p className="review-text">{props.customer.review}</p>
    </div>
  );
}

export default TestimonialReviewCard;
