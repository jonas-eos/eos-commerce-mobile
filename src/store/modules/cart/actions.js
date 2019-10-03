/**
 * Send action to add a product in cart state
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

/**
 * Send action to update the item amount in cart state.
 * @param {number} productId
 * @param {integer} amount
 * @return The action call, productId properties and amount.
 */
export const updateAmount = (productId, amount) => {
  return {
    type: '@cart/UPDATE_AMOUNT',
    productId,
    amount,
  };
};
