import React from 'react';
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";

const CartList = ({ products, onRemove, onIncrement, onDecrement }) => {
  return (
    <>
      {products.length === 0 ? (
        <div className='font-semibold text-gray-900 dark:text-gray-100'>No products in cart!</div>
      ) : (
        products.map(item => (
          <div key={item.id} className='dark:bg-zinc-800 pl-0 pt-6 p-4 flex flex-col border-t border-gray-300 dark:border-zinc-700'>
            <div className='flex gap-2'>
              <img src={item.image.url} className='w-20 h-20 object-cover'/>
              <div className='flex-1 flex flex-col'>
                <div className='flex justify-between flex-1'>
                  <h2 className='px-1 font-semibold text-xl dark:text-gray-50'>{item.title}</h2>
                  <button className='self-start' onClick={() => onRemove(item)}>
                    <FaXmark className='text-gray-900 text-lg dark:text-white'/>
                  </button>
                </div>
                <div className='flex justify-between'>
                  <div className='flex items-center justify-between text-md px-2'>
                    <button className='bg-gray-100 dark:bg-zinc-900 rounded-md p-1' onClick={() => onIncrement(item)}><FaPlus className='cursor-pointer dark:text-gray-200'/></button>
                    <span className='px-2 font-semibold dark:text-gray-200'>{item.quantity}</span>
                    <button className='bg-gray-100 dark:bg-zinc-900 rounded-md p-1' onClick={() => onDecrement(item)}><FaMinus className='cursor-pointer dark:text-gray-200'/></button>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">${item.discountedPrice.toFixed(2)}</h3>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
};

export default CartList;
