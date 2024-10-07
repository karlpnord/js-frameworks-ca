import Header from './ui/Header';
import Footer from './ui/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='min-h-dvh dark:bg-zinc-800'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default Layout;
