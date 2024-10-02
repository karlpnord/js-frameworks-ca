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
    <div className="flex items-center mb-4 mt-1">
      <div className='flex items-center space-x-1 rtl:space-x-reverse'>
        {stars}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
    </div>
  )
};

export default RatingStars;
