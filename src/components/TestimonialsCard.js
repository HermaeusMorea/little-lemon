import React from 'react';
import TestimonialReviewCard from './TestimonialReviewCard';
import photo from './source/Miku.jpg'
import './TestimonialsCard.css'
function TestimonialsCard() {
  return (
    <div className='Testimonial'>
      <div className='titleOfTestimonials'>
        Testimonials
      </div>
      <div className='ContentOfTestimonials'>
        <div className='ContentOfTestimonials_First'>
          <TestimonialReviewCard
            customer={{
              photo: photo,
              name: 'miku',
              rating: 5,
              review: 'I had a great experience at this restaurant! The food was delicious and the service was top-notch.'
            }}
          />
        </div>
        <div className='ContentOfTestimonials_Second'>
          <TestimonialReviewCard
            customer={{
              photo: photo ,
              name: 'miku',
              rating: 5,
              review: 'I had a great experience at this restaurant! The food was delicious and the service was top-notch.'
            }}
          />
        </div>
        <div className='ContentOfTestimonials_Third'>
          <TestimonialReviewCard
            customer={{
              photo: photo,
              name: 'miku',
              rating: 5,
              review: 'I had a great experience at this restaurant! The food was delicious and the service was top-notch.'
            }}
          />
        </div>
        <div className='ContentOfTestimonials_Fourth'>
          <TestimonialReviewCard
            customer={{
              photo: photo,
              name: 'miku',
              rating: 5,
              review: 'I had a great experience at this restaurant! The food was delicious and the service was top-notch.'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
