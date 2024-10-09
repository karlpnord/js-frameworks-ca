import { useState, useEffect } from 'react';
import Loader from '../../components/ui/Loader';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";

const CheckoutSuccess = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  });

  return (
    <div className='container mx-auto flex-1 px-4 my-10 font-inter flex justify-center items-center'>
      <div className='flex flex-col bg-white'>
        {isLoading ? (
          <div className='flex flex-col gap-4 justify-center items-center md:min-w-[540px] md:min-h-[300px] py-8 px-12 border dark:bg-zinc-800 border-gray-300 dark:border-zinc-700'>
            <Loader />
            <div className='flex flex-col text-center font-semibold text-gray-800 dark:text-gray-100'>
              <h2>Processing payment</h2>
              <h3>Please wait...</h3>
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center text-center gap-2md:min-w-[540px] md:min-h-[300px] p-8 md:p-16 border border-gray-300 dark:bg-zinc-800 dark:border-zinc-700'>
            <FaCircleCheck className='text-green-600 text-8xl mb-4'/>
            <h2 className='text-gray-800 text-xl mb-1 font-semibold dark:text-gray-50'>Your order is complete!</h2>
            <h3 className='text-gray-600 dark:text-gray-400'>You will be receiving a confirmation email with order details.</h3>
            <Link to='/' className='mt-6'><Button text={'Back to store'} type={'primary'}/></Link>
          </div>
        )}
      </div>
    </div>
  )
};

export default CheckoutSuccess;
