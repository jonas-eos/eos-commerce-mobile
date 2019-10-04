/**
 * Send a request to add a product in cart state
 * @param {Number} productId
 * @return The request call, and product id.
 */
export const addToCartRequest = productId => {
  return {
    type: '@cart/ADD_REQUEST',
    productId,
  };
};

/**
 * Send action to add a product in cart state
 * @param {object} product
 * @return The action call, and product properties.
 */
export const addToCartSuccess = product => {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
};

/**
 * Send action to remove a product from cart state
 * @param {object} product
 * @return The action call, and product properties.
 */
export const removeFromCart = productId => {
  return {
    type: '@cart/REMOVE',
    productId,
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
