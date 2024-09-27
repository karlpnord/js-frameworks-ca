import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProductCard = ({ data }) => {
  return (
    <Link to={`products/${data.id}`} className="w-72 h-fit bg-white border font-inter border-gray-200 shadow-sm dark:bg-zinc-900 dark:border-zinc-700 hover:shadow-xl hover:border-gray-400 hover:scale-105 transition">
      <img className='max-h-64 min-w-full object-cover' src={data.image.url} alt={data.title}/>
      <div className="p-4">
        <span className='text-sm uppercase opacity-60 dark:text-gray-300'>{data.tags[0]}</span>
        <h5 className="text-xl font-semibold mt-2 tracking-tight text-gray-900 dark:text-gray-50">{data.title}</h5>
        <div className="flex items-center mb-4 mt-1">
          <RatingStars rating={data.rating.toFixed(0)}/>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{data.rating.toFixed(1)}</span>
        </div>
        <div className='flex justify-between items-center'>
          {data.discountedPrice !== data.price ? (
            <div className='flex items-center gap-2'>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-50">${data.discountedPrice.toFixed(2)}</span>
              <span className='text-sm font-light dark:text-gray-300 line-through'>${data.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-900 dark:text-white">${data.discountedPrice.toFixed(2)}</span>
          )}
          <FaArrowUpRightFromSquare className='text-xl text-blue-600'/>
        </div>
      </div>
    </Link>
  )
};

export default ProductCard;
