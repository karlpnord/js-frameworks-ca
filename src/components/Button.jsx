import React from 'react';

const Button = ({ icon }) => {
  return (
    <button className='flex justify-center items-center gap-2 bg-blue-600 text-gray-100 w-full py-2 px-6 mt-2 transition hover:bg-blue-500 hover:text-white'>
      {icon}
      <span>Add to cart</span>
    </button>
  )
};

export default Button;
