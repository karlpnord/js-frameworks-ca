import Header from './Header';
import Footer from './Footer';
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
