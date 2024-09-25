import React from 'react';
import { FaHouse, FaEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const NavList = ({navbarOpen}) => {
  return (
    <ul className={`${navbarOpen ? 'block absolute right-0 top-20' : 'hidden'}`}>
      <li>
        <Link to='/' className='flex items-center gap-2 border border-gray-200 px-12 py-4 hover:bg-gray-100 transition dark:bg-zinc-800 dark:border-gray-400 dark:hover:bg-zinc-600'>
          <FaHouse className='text-2xl text-gray-700 dark:text-gray-100'/>
          <span className='font-semibold text-lg  text-gray-800 font-inter dark:text-gray-100'>Home</span>
        </Link>
      </li>
      <li>
        <Link to='/contacts' className='flex items-center gap-2 border border-gray-200 px-12 py-4 hover:bg-gray-100 transition dark:bg-zinc-800 dark:hover:bg-zinc-600'>
          <FaEnvelope className='text-2xl text-gray-700 dark:text-gray-100'/>
          <span className='font-semibold text-lg  text-gray-800 font-inter dark:text-gray-100'>Contact</span>
        </Link>
      </li>
      <li className='flex items-center gap-2 border border-gray-200 px-12 py-4 dark:bg-zinc-800 '>
        <DarkModeToggle />
      </li>
    </ul>
  )
};

export default NavList;
