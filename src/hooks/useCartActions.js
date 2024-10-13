import { useContext } from 'react';
import CartContext from '../services/providers/CartContext';

export const useCartActions = () => {
  const { dispatch } = useContext(CartContext);

  const confirmRemove = (item) => {
    dispatch({ type: 'CONFIRM_REMOVE_ITEM', payload: { id: item.id } });
  };

  const confirmAdd = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const cancelRemove = (item) => {
    dispatch({ type: 'CANCEL_REMOVE_ITEM', payload: { id: item.id } });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const incrementItem = (item) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: item });
  };

  const decrementItem = (item) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: item });
  };

  const clearCart = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  return {
    confirmRemove,
    cancelRemove,
    removeItem,
    incrementItem,
    decrementItem,
    confirmAdd,
    clearCart,
  };
};
