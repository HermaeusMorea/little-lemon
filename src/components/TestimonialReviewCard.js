import React from 'react';
import './TestimonialReviewCard.css'
function TestimonialReviewCard(props) {
  return (
    <div className="testimonial-card">
      <p className="rating">{props.customer.rating}</p>
      <div className='Photo_Name'>
        <img src={props.customer.photo} alt="Customer's Profile"/>
      <h3>{props.customer.name}</h3>
      </div>

      <p className="review-text">{props.customer.review}</p>
    </div>
  );
}

export default TestimonialReviewCard;
