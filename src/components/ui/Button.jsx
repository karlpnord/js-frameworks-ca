import React from 'react';

const Button = ({ icon, text, handler, type }) => {

  return (
    <button 
      className={`
        flex
        justify-center
        items-center
        gap-2 w-full
        py-2
        px-6
        transition
        font-semibold
        ${type === 'primary' 
          ? 'bg-blue-600 text-gray-100 border border-blue-600 hover:bg-blue-500 hover:text-white' 
          : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-200'}`}
      onClick={handler}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
};

export default Button;
