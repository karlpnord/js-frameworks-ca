import { useContext } from 'react';
import CartContext from '../../services/providers/CartContext';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import CartModal from '../../components/CartModal';
import CartList from '../../components/CartList';
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
    <div className='border border-gray-300 flex flex-col p-6 min-h-fit dark:bg-zinc-900 dark:border-zinc-700 font-inter max-w-[1000px] lg:mx-auto'>
      <div className='flex flex-col gap-4 container mx-auto py-6 px-4'>
        <h1 className='font-semibold text-2xl dark:text-gray-50'>Shopping Cart</h1>
        <CartList 
          products={products}
          onRemove={removeItem}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
        />
        {cart.totalPrice === 0 
          ? <div className='text-lg dark:text-gray-50'>Cart empty</div> 
          : <h2 className='text-xl font-semibold dark:text-gray-50'>Total: ${cart.totalPrice.toFixed(2)}</h2>}
        <div className='flex flex-col sm:flex-row gap-2'>
          <Link to='/checkoutsuccess' className={`flex-1 ${cart.totalPrice === 0 ? 'pointer-events-none' : 'pointer-events-auto' }`}>
            <Button text={'Proceed to payment'} type={'primary'}/>
          </Link>
          <span className='flex-1'><Button text={'Empty Cart'} type={'secondary'} handler={clearCart}/></span>
        </div>
        {itemPendingRemoval && (
          <CartModal 
            item={itemPendingRemoval}
            onConfirm={confirmRemove}
            onCancel={cancelRemove}
          />
        )}
      </div>
    </div>
  )
};

export default Checkout;
