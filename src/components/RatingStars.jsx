import React from 'react';
import { FaStar } from "react-icons/fa6";

const Star = ({ filled }) => {
  return <FaStar className={`${filled ? 'text-yellow-500' : 'text-gray-500'}`}/>
}

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} filled={i <= rating}/>)
  }

  return (
    <div className='flex items-center space-x-1 rtl:space-x-reverse'>
      {stars}
    </div>
  )
};

export default RatingStars;
