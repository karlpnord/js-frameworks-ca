import { FaHouse, FaEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const NavList = ({navbarOpen, toggleNavbar}) => {
  return (
    <ul className={`${navbarOpen ? 'block absolute right-0 top-20' : 'hidden'}`}>
      <li>
        <Link to='/' onClick={toggleNavbar} className='flex items-center justify-center gap-2 border border-gray-200 px-12 py-4 hover:bg-gray-100 transition dark:bg-zinc-800 dark:border-gray-700 dark:hover:bg-zinc-600'>
          <FaHouse className='text-xl text-gray-700 dark:text-gray-300'/>
          <span className='font-medium text-md text-gray-800 font-inter dark:text-gray-300'>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/contact' onClick={toggleNavbar} className='flex items-center justify-center gap-2 border border-gray-200 px-12 py-4 hover:bg-gray-100 transition dark:bg-zinc-800 dark:hover:bg-zinc-600 dark:border-gray-700'>
          <FaEnvelope className='text-xl text-gray-700 dark:text-gray-300'/>
          <span className='font-medium text-md text-gray-800 font-inter dark:text-gray-300'>Contact</span>
        </Link>
      </li>
      <li className='flex items-center justify-center gap-2 border border-gray-200 px-12 py-4 dark:bg-zinc-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-600 transition'>
        <DarkModeToggle />
      </li>
    </ul>
  )
};

export default NavList;
