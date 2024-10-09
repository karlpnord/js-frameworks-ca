import React from 'react';
import ProductCard from './ProductCard';

const ProductContainer = ({ data, searchValue }) => {

  const filteredData = searchValue
    ? data.filter(product => 
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : data;

  return (
    <div className='border border-gray-300 bg-white dark:border-zinc-700 py-10 px-4 w-100 grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-16 mt-10 mb-5 dark:bg-zinc-800'>
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <ProductCard key={item.id} data={item}/>
        ))
      ) : (
        <div className='dark:text-gray-200 font-semibold text-lg'>No products matching {searchValue}</div>
      )}
    </div>
  )
};

export default ProductContainer;
