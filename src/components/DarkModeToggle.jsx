import { useState } from 'react';

const DarkModeToggle = () => {
  const [darkmode, setDarkmode] = useState(false);

  const darkModeHandler = () => {
    setDarkmode(!darkmode);
    document.body.classList.toggle('dark');
  }

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value={darkmode} className="sr-only peer" onChange={() => darkModeHandler()}/>
      <div className="relative w-9 h-5 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-300 dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-300"></div>
      <span className="ms-3 font-medium text-md  text-gray-800 font-inter dark:text-gray-300">{darkmode ? 'Light mode' : 'Dark mode'}</span>
    </label>
  )
};

export default DarkModeToggle;
