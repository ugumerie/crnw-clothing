export const addItemToCart = (initialCartItems, cartItemToAdd) => {
  const existingCartItem = initialCartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return initialCartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...initialCartItems, {...cartItemToAdd, quantity: 1}]
};
