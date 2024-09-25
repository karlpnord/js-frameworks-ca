import { useState } from 'react';
import { FaBars, FaCartShopping, FaX, FaStore } from "react-icons/fa6";
import NavList from './NavList';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  
  const toggleNavbar = () => {
    navbar ? setNavbar(false) : setNavbar(true);
  }

  return (
    <header className='border-b border-gray-300 relative dark:bg-zinc-800 dark:border-gray-700'>
      <nav className='container mx-auto flex justify-between items-center py-6 px-4'>
        <Link to='/' className='flex items-center gap-2'>
          <FaStore className='text-3xl text-blue-600'/>
          <span className='font-bold text-2xl font-inter text-gray-800  dark:text-gray-300'>E-Com</span>
        </Link>
        <NavList navbarOpen={navbar}/>
        <div className='flex gap-4'>
          <button onClick={toggleNavbar} className='text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition'>
            {navbar ? <FaX/> : <FaBars/>}
          </button>
          <Link to='/cart' className='flex items-center pl-4 border-l border-gray-300 dark:border-gray-700'>
            <FaCartShopping className='text-xl text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition'/>
            <span className='text-xl font-semibold ml-1 text-gray-800 font-inter dark:text-gray-300'>0</span>
          </Link>
        </div>
      </nav>
    </header>
  )
};

export default Header;
