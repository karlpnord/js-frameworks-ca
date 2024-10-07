const SearchAutoComplete = ({ data, searchValue, setSearchValue }) => {
  const changeHandler = (event) => {
    setSearchValue(event.target.value);
  }

  const clickHandler = (value) => {
    setSearchValue(value);
  }

  return (
    <div className='relative md:w-64'>
      <div className='flex'>
        <input type='text' value={searchValue} onChange={(event) => changeHandler(event)} className="border border-gray-300 w-full pl-4 pr-6 py-2 focus:shadow focus:outline-none dark:bg-zinc-500 dark:border-zinc-600 dark:text-white" placeholder="Search product..." />
      </div>
      <div className='border border-gray-300 bg-white absolute z-50 dark:border-zinc-600'>
        {data.filter(item => {
          const searchTerm = searchValue.toLowerCase();
          const title = item.title.toLowerCase();
          return searchTerm && title.includes(searchTerm) && title !== searchTerm;
        })
        .map((item => (
          <div onClick={() => clickHandler(item.title)} key={item.id} className='py-2 w-full pl-4 pr-6 border-b border-gray-200 transition hover:cursor-pointer hover:bg-gray-200 dark:bg-zinc-500 dark:border-zinc-600 dark:text-gray-200 dark:hover:bg-zinc-700'>{item.title}</div>
        )))}
      </div>
    </div>
  )
};

export default SearchAutoComplete;
