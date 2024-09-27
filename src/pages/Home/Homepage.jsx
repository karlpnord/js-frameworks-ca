import SearchInput from "../../components/form/SearchInput";
import { useApi } from "../../hooks/useApi";
import ProductContainer from "../../components/ProductContainer";
import { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Homepage = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data, isLoading, isError } = useApi('https://v2.api.noroff.dev/online-shop');
  isError && <div>Error displaying products</div>
  
  return (
    <div className='dark:bg-zinc-800 bg-gray-100'>
      <div className='container mx-auto flex flex-col py-6 px-4'>
        <div className="flex flex-col gap-6 md:flex-row justify-between mt-6">
          <h1 className="text-2xl font-semibold dark:text-gray-200">Our Products</h1>
          <form className='flex'>
            <SearchInput value={searchValue} setter={setSearchValue}/>
            <button type='submit' className='border border-gray-300 px-5 py-2 dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-600 transition'>
              <FaMagnifyingGlass className="text-lg text-gray-600 dark:text-gray-400"/>
            </button>
          </form>
        </div>
        <div>
          {isLoading && <div>Loading...</div>}
          {isError && <div>Error displaying products</div>}
          <ProductContainer data={data}/>
        </div>
      </div>
    </div>
  )
};

export default Homepage;
