import React from 'react';
import ProductCard from './ProductCard';

const ProductContainer = ({ data }) => {
  return (
    <div className='border border-gray-300 dark:border-zinc-700 py-10 px-4 w-100 grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-16 mt-10 mb-5'>
      {data.map((item) => (
        <ProductCard key={item.id} data={item}/>
      ))}
    </div>
  )
};

export default ProductContainer;
