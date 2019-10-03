/**
 * Send action to add a product to cart state
 * @param {object} product
 * @return The action call, and product properties.
 */
export const addToCart = product => {
  return {
    type: '@cart/ADD',
    product,
  };
};

/**
 * Send action to remove a product from cart state
 * @param {object} product
 * @return The action call, and product properties.
 */
export const removeFromCart = product => {
  return {
    type: '@cart/REMOVE',
    product,
  };
};
