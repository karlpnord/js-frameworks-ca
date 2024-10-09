import { FaSun, FaMoon } from "react-icons/fa6";
import { useState } from 'react';

const DarkModeToggle = () => {
  const [darkmode, setDarkmode] = useState(false);

  const darkModeHandler = () => {
    setDarkmode(!darkmode);
    document.body.classList.toggle('dark');
  }

  return (
    <li
      className='flex items-center justify-center gap-2 px-12 py-4 bg-white cursor-pointer border border-gray-200 text-lg font-medium transition text-gray-700 dark:text-gray-300 dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-600'
      onClick={darkModeHandler}
    >
      {darkmode ? (
        <>
          <FaMoon />
          <span>Dark</span>
        </>
      ) : (
        <>
          <FaSun />
          <span>Light</span>
        </>
      )}
    </li>
  )
};

export default DarkModeToggle;
