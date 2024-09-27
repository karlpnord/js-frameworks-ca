import { FaStore } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full dark:bg-zinc-800">
      <div className="container mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to='/' className="flex items-center gap-2 mb-4 sm:mb-0 rtl:space-x-reverse">
            <FaStore className='text-3xl text-blue-600'/>
            <span className="self-center text-2xl font-semibold font-inter whitespace-nowrap text-gray-800  dark:text-gray-300">
              E-Com
            </span>
          </Link>
            <ul className="flex flex-wrap gap-4 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-300">
              <li>About</li>
              <li>FAQ</li>
              <li><Link to='contact' className='dark:hover:text-white hover:text-gray-900 transition'>Contact</Link></li>
            </ul>
          </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-300">
          ©2023 E-Com All Rights Reserved.
        </span>
      </div>
    </footer>
  )
};

export default Footer;
