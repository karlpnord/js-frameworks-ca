import { useReducer, createContext, useEffect } from 'react';
import cartReducer from '../state/cartReducer';

const CartContext = createContext();

const initialState = { cart: [], totalPrice: 0, totalProducts: 0 };

export const CartProvider = ({ children }) => {
  
  const getInitialState = () => {
    const savedCart = localStorage.getItem('cartState');
    return savedCart ? JSON.parse(savedCart) : initialState;
  }
  
  const [cart, dispatch] = useReducer(cartReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;