import SearchAutoComplete from "../../components/form/SearchAutoComplete";
import { useApi } from "../../hooks/useApi";
import ProductContainer from "../../components/ProductContainer";
import Loader from "../../components/Loader";
import { useState } from 'react';

const Homepage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, isError } = useApi('https://v2.api.noroff.dev/online-shop');
  isError && <div>Error displaying products</div>
  
  return (
    <div className='dark:bg-zinc-900 bg-zinc-100 pb-6 min-h-dvh'>
      <div className='container mx-auto flex flex-col py-6 px-4'>
        <div className="flex flex-col gap-6 md:flex-row justify-between mt-6">
          <h1 className="text-2xl font-semibold dark:text-gray-200">Our Products</h1>
          <SearchAutoComplete data={data} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div>
          {isLoading && <div className='flex justify-center items-center mt-40'><Loader /></div>}
          {isError && <div>Error displaying products</div>}
          <ProductContainer data={data} searchValue={searchValue}/>
        </div>
      </div>
    </div>
  )
};

export default Homepage;
