import { useContext } from 'react';
import CartContext from '../../services/providers/CartContext';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import CartModal from '../../components/cart/CartModal';
import CartList from '../../components/cart/CartList';
import { useCartActions } from '../../hooks/useCartActions';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const products = cart.cart;

  const itemPendingRemoval = products.find(item => item.isPendingRemoval);

  const {
    confirmRemove,
    cancelRemove,
    removeItem,
    incrementItem,
    decrementItem,
    clearCart
  } = useCartActions();

  return (
    <main className='flex-1 container font-inter lg:max-w-[1000px] mx-auto'>
      <div className='flex flex-col lg:divide-x-[1px] divide-gray-300 dark:divide-zinc-700 lg:flex-row gap-4 px-6 py-8 my-14 border border-gray-300 bg-white dark:bg-zinc-800 dark:border-zinc-700'>
        <div className='flex-1 p-3 flex flex-col gap-4'>
          <h1 className='font-semibold text-2xl text-gray-900 dark:text-gray-50'>Items in Cart</h1>
          <CartList 
            products={products}
            onRemove={removeItem}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
          />
        </div>
        <div className='flex flex-col flex-1 gap-4 bg-white dark:bg-zinc-800 p-3 max-h-fit'>
          <h2 className='font-semibold text-2xl text-gray-900 dark:text-gray-100'>Summary</h2>
          <div className='text-gray-600 dark:text-gray-400 text-sm'>
            <h3 className='flex justify-between'>Subtotal ({cart.totalProducts} items)<span>${cart.totalPrice.toFixed(2)}</span></h3>
            <h4 className='flex justify-between'>Shipping Discount<span>$0.00</span></h4>
            <h5 className='flex justify-between'>Shipping & Handling<span>$0.00</span></h5>
            <h6 className='flex justify-between'>Tax (Calculated at checkout)<span>$0.00</span></h6>
          </div>
            <h3 className='flex justify-between text-xl font-semibold dark:text-gray-50'>
              Sub-Total:
              <span>${cart.totalPrice.toFixed(2)}</span>
            </h3>
          <div className='flex flex-col sm:flex-row lg:flex-col gap-2'>
            <Link to='/checkoutsuccess' className={`flex-1 ${cart.totalPrice === 0 ? 'pointer-events-none' : 'pointer-events-auto' }`}>
              <Button text={'Checkout'} type={'primary'} handler={clearCart}/>
            </Link>
            <span className='flex-1'><Button text={'Empty Cart'} type={'secondary'} handler={clearCart}/></span>
          </div>
        </div>
        {itemPendingRemoval && (
          <CartModal 
            item={itemPendingRemoval}
            onConfirm={confirmRemove}
            onCancel={cancelRemove}
          />
        )}
      </div>
    </main>
  )
};

export default Checkout;
