export const calculateTotals = (cart) => {
  const totalProducts = cart.reduce((prevValue, currentValue) => prevValue + currentValue.quantity, 0);
  const totalPrice = cart.reduce(
    (currentTotal, product) => currentTotal + product.discountedPrice * product.quantity,
    0
  );
  return { totalProducts, totalPrice };
};
