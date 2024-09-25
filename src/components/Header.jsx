import React, { useState } from 'react';
import { FaBars, FaCartShopping, FaX } from "react-icons/fa6";
import NavList from './NavList';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  
  const toggleNavbar = () => {
    navbar ? setNavbar(false) : setNavbar(true);
  }

  return (
    <header className='border-b border-gray-200 relative dark:bg-zinc-800 dark:border-gray-400'>
      <nav className='container mx-auto flex justify-between items-center py-6 px-4 '>
        <Link to='/' className='font-bold text-2xl text-gray-800 font-inter dark:text-gray-100'>E-Com</Link>
        <NavList navbarOpen={navbar}/>
        <div className='flex gap-4'>
          <button onClick={toggleNavbar}>
            {navbar ? (
              <FaX className='text-2xl text-gray-700 dark:text-gray-100'/>
            ) : (
              <FaBars className='text-2xl text-gray-700 dark:text-gray-100'/>
            )}
          </button>
          <Link to='/cart' className='flex items-center border-l border-gray-300 pl-4'>
            <FaCartShopping className='text-2xl text-gray-700 dark:text-gray-100'/>
            <span className='text-xl font-semibold ml-1 text-gray-800 font-inter dark:text-gray-100'>0</span>
          </Link>
        </div>
      </nav>
    </header>
  )
};

export default Header;
