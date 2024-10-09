import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/ui/Loader';
import SingleProduct from '../../components/SingleProduct';
import { useApi } from '../../hooks/useApi';

const Product = () => {
  const { id } = useParams();
  const url = `https://v2.api.noroff.dev/online-shop/${id}`;
  const { data, isLoading, isError } = useApi(url);

  return (
    <div className='pb-6'>
      <div className='container mx-auto py-6 px-4'>
        <div>
          {isLoading && <div className='flex justify-center items-center mt-40'><Loader /></div>}
          {isError && <div>Error displaying products</div>}
          <SingleProduct data={data}/>
        </div>
      </div>
    </div>
  )
};

export default Product;
