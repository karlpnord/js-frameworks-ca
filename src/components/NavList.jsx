import { FaHouse, FaEnvelope } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const NavList = ({navbarOpen, toggleNavbar}) => {
  return (
    <ul className={`${navbarOpen ? 'block absolute right-0 top-20 z-50' : 'hidden'}`}>
      <li>
        <NavLink 
          to='/'
          onClick={toggleNavbar}
          className={({ isActive }) => {
            return (
              'flex items-center justify-center gap-2 font-inter text-lg border border-gray-200 px-12 py-4 bg-white hover:bg-gray-100 transition dark:border-gray-700 dark:bg-zinc-800 dark:hover:bg-zinc-600' + ' ' + 
              (isActive
                ? 'font-semibold text-gray-900 dark:text-gray-50'
                : 'font-medium text-gray-700 dark:text-gray-300'
              )
            )
          }}
        >
          <FaHouse/>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contact'
          onClick={toggleNavbar}
          className={({ isActive }) => {
            return (
              'flex items-center justify-center gap-2 font-inter text-lg border border-gray-200 px-12 py-4 bg-white hover:bg-gray-100 transition dark:border-gray-700 dark:bg-zinc-800 dark:hover:bg-zinc-600' + ' ' + 
              (isActive
                ? 'font-semibold text-gray-900 dark:text-gray-50'
                : 'font-medium text-gray-700 dark:text-gray-300'
              )
            )
          }}
        >
          <FaEnvelope/>
          <span>Contact</span>
        </NavLink>
      </li>
      <li className='flex items-center justify-center gap-2 text-lg border border-gray-200 px-12 py-4 dark:bg-zinc-800 dark:border-gray-700 bg-white hover:bg-gray-100 dark:hover:bg-zinc-600 transition'>
        <DarkModeToggle />
      </li>
    </ul>
  )
};

export default NavList;
