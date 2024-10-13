import SearchAutoComplete from "../../components/form/SearchAutoComplete";
import { useApi } from "../../hooks/useApi";
import ProductContainer from "../../components/all-products/ProductContainer";
import Loader from "../../components/ui/Loader";
import { useState } from 'react';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Homepage = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading, isError } = useApi(apiBaseUrl);
  
  return (
    <main className='dark:bg-zinc-900 bg-zinc-100 pb-6 min-h-dvh'>
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
    </main>
  )
};

export default Homepage;
