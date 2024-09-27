import React from 'react';

const SearchInput = ({ value, setter }) => {

  const searchHandler = (event) => {
    setter(event.target.value)
  }

  return (
    <input type="text" value={value} onChange={(event) => searchHandler(event)} className="border border-gray-300 pl-4 pr-6 py-2 focus:shadow focus:outline-none dark:bg-zinc-500 dark:border-zinc-600 dark:text-white" placeholder="Search product..." />
  )
};

export default SearchInput;
