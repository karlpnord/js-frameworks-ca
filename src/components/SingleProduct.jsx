import RatingStars from './RatingStars';
import Button from './ui/Button';
import Reviews from './Reviews';
import { FaCartPlus } from "react-icons/fa6";
import { useState } from 'react';
import AddProductModal from './AddProductModal';
import { useCartActions } from '../hooks/useCartActions';

const SingleProduct = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { confirmAdd } = useCartActions();

  const clickHandler = () => {
    confirmAdd(data);
    setModalOpen(true);
  }

  return (
    <div className='border border-gray-300 flex flex-col p-6 my-10 bg-white dark:bg-zinc-800 dark:border-zinc-700 font-inter max-w-[1000px] lg:mx-auto'>
      <div className='flex flex-col md:flex-row gap-2 md:gap-10 mb-8'>
        <div className='md:w-1/2'>
          <img className='shadow-md mb-2 max-h-[500px]' src={data.image?.url}/>
        </div>
        <div className='flex flex-col gap-2 md:w-1/2 md:justify-center'>
          <h1 className='text-3xl lg:text-5xl font-semibold mt-2 tracking-tight text-gray-900 dark:text-gray-50'>{data.title}</h1>
          <RatingStars rating={data.rating}/>
          <h2 className='opacity-80 text-sm md:mt-6 md:text-lg md:leading-snug dark:text-gray-300'>{data.description}</h2>
          {data.discountedPrice !== data.price ? (
            <div className='flex items-center gap-2 md:mt-6 mb-2'>
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">${data.discountedPrice?.toFixed(2)}</span>
              <span className='text-sm font-light dark:text-gray-300 line-through'>${data.price?.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-2xl font-bold text-gray-900 dark:text-white">${data.discountedPrice?.toFixed(2)}</span>
          )}
          <Button type={'primary'} text={'Add to cart'} icon={<FaCartPlus className='text-xl'/>} handler={clickHandler}/>
        </div>
      </div>
      <hr className='border-gray-300 mb-6 dark:border-zinc-700'/>
      <h3 className='text-2xl font-semibold mb-4 dark:text-gray-100'>Reviews</h3>
      <Reviews data={data.reviews}/>
      {modalOpen && (
        <AddProductModal 
          product={data}
          setModal={setModalOpen}
        />
      )}
    </div>
  )
};

export default SingleProduct;
