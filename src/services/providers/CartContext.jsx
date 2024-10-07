import { useReducer, createContext } from 'react';
import cartReducer from '../state/cartReducer';

const CartContext = createContext();

const initialState = { cart: [], totalPrice: 0, totalProducts: 0 };

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;