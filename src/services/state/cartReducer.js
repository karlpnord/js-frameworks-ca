const cartReducer = (state, action) => {
  let productIndex;
  let newTotalPrice;
  let newTotalProducts;
  let cart;

  switch (action.type) {
    case 'ADD_ITEM':
      cart = [...state.cart];
      productIndex = cart.findIndex((product) => product.id === action.payload.id);

      if (productIndex === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }

      newTotalProducts = cart.reduce((prevValue, currentValue) => {
        return (prevValue += currentValue.quantity);
      }, 0);

      newTotalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return { ...state, cart: cart, totalPrice: newTotalPrice, totalProducts: newTotalProducts };

    case 'REMOVE_ITEM':
      cart = [...state.cart];
      productIndex = cart.findIndex((product) => product.id === action.payload.id);

      if (productIndex !== -1) {
        cart = [...cart.slice(0, productIndex), ...cart.slice(productIndex + 1)];
      }

      newTotalProducts = cart.reduce((prevValue, currentValue) => {
        return (prevValue += currentValue.quantity);
      }, 0);

      newTotalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return { ...state, cart: cart, totalPrice: newTotalPrice, totalProducts: newTotalProducts };

    case 'INCREMENT_ITEM':
      cart = [...state.cart];
      productIndex = cart.findIndex((product) => product.id === action.payload.id);

      cart = [
        ...cart.slice(0, productIndex),
        { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
        ...cart.slice(productIndex + 1),
      ];

      newTotalProducts = cart.reduce((prevValue, currentValue) => {
        return (prevValue += currentValue.quantity);
      }, 0);

      newTotalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return { ...state, cart: cart, totalPrice: newTotalPrice, totalProducts: newTotalProducts };

    case 'DECREMENT_ITEM':
      cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          const newQuantity = item.quantity - 1;
          if (newQuantity === 0) {
            return { ...item, isPendingRemoval: true };
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      newTotalProducts = cart.reduce((prevValue, currentValue) => {
        return (prevValue += currentValue.quantity);
      }, 0);

      newTotalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      const hasPendingRemoval = cart.some((item) => item.isPendingRemoval && item.quantity === 1);

      return {
        ...state,
        cart: cart,
        totalPrice: hasPendingRemoval ? state.totalPrice : newTotalPrice,
        totalProducts: newTotalProducts ? state.totalProducts : newTotalProducts,
      };

    case 'CONFIRM_REMOVE_ITEM':
      cart = state.cart.filter((item) => item.id !== action.payload.id);

      newTotalProducts = cart.reduce((prevValue, currentValue) => {
        return (prevValue += currentValue.quantity);
      }, 0);

      newTotalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      return { ...state, cart: cart, totalPrice: newTotalPrice, totalProducts: newTotalProducts };

    case 'CANCEL_REMOVE_ITEM':
      cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: 1, isPendingRemoval: false };
        }
        return item;
      });

      return { ...state, cart: cart };

    case 'EMPTY_CART':
      return { cart: [], totalPrice: 0, totalProducts: 0 };

    default:
      return state;
  }
};

export default cartReducer;
