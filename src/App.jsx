import Layout from './components/Layout';
import Homepage from './pages/Home/Homepage';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';
import Product from './pages/Product/Product';
import CheckoutSuccess from './pages/CheckoutSuccess/CheckoutSuccess';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/checkoutsuccess' element={<CheckoutSuccess />}/>
      </Route>
    </Routes>
  )
};

export default App;
