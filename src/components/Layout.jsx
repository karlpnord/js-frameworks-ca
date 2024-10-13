import Header from './ui/Header';
import Footer from './ui/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-zinc-900'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;
