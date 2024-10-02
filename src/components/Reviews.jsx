import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import RatingStars from './RatingStars';

const Reviews = ({ data }) => {
  return (
    <div className='grid md:grid-cols-2 gap-x-6 gap-y-4'>
      {data?.length > 0 ? (
        data.map(item => (
          <div key={item.id} className='flex flex-col border border-gray-300 p-3 w-full dark:border-zinc-700'>
            <div className='flex items-center gap-2'>
              <FaCircleUser className='text-2xl text-zinc-500 dark:text-blue-500'/>
              <h3 className='font-semibold text-lg dark:text-gray-50'>{item.username}</h3>
            </div>
            <RatingStars rating={item.rating}/>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{item.description}</p>
          </div>
        ))
      ) : (
        <div className='text-gray-800 dark:text-gray-200'>No reviews for this product</div>
      )}
    </div>
  )
};

export default Reviews;
