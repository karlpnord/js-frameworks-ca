import React from 'react';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa6";

const CartList = ({ products, onRemove, onIncrement, onDecrement }) => {
  return (
    <>
      {products.map(item => (
        <div key={item.id} className='border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 p-3 flex flex-col'>
          <div className='flex items-center justify-between'>
            <img src={item.image.url} className='w-12 h-12 object-cover lg:w-20 lg:h-20'/>
            <h2 className='px-1 font-semibold md:text-xl dark:text-gray-50'>{item.title}</h2>
            {item.discountedPrice !== item.price ? (
              <div className='flex flex-col items-end'>
                <span className='text-sm font-light dark:text-gray-300 line-through'>${item.price.toFixed(2)}</span>
                <span className="text-lg font-bold text-gray-900 dark:text-gray-50">${item.discountedPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white">${item.discountedPrice.toFixed(2)}</span>
            )}
          </div>
          <hr className='my-4 border-gray-300 dark:border-zinc-700'/>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between text-lg border border-gray-300 px-2 dark:border-zinc-700'>
              <button onClick={() => onIncrement(item)}><FaPlus className='cursor-pointer dark:text-gray-200'/></button>
              <span className='px-2 dark:text-gray-200'>{item.quantity}</span>
              <button onClick={() => onDecrement(item)}><FaMinus className='cursor-pointer dark:text-gray-200'/></button>
            </div>
            <button 
              className='flex gap-1 items-center px-2 py-1 hover:bg-gray-200 transition dark:text-gray-100 dark:hover:bg-gray-700'
              onClick={() => onRemove(item)}
            >
              <FaTrash />
              <span>Remove</span>
            </button>
          </div>
        </div>
      ))}
    </>
  )
};

export default CartList;
