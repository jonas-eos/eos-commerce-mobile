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
 * Send request to remove a product from cart state
 * @param {number} productId
 * @return The action call, and product id.
 */
export const removeFromCartRequest = productId => {
  return {
    type: '@cart/REMOVE_REQUEST',
    productId,
  };
};

/**
 * Send action to remove a product from cart state
 * @param {Number} productIndex
 * @return The action call, and product index in cart.
 */
export const removeFromCartSuccess = productIndex => {
  return {
    type: '@cart/REMOVE_SUCCESS',
    productIndex,
  };
};

/**
 * Send request to change the item amount in cart state.
 * @param {number} productId
 * @param {number} amount the new value to be updated
 * @return The action call, product id and new amount.
 */
export const updateAmountRequest = (productId, amount) => {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    productId,
    amount,
  };
};

/**
 * Send action to change the item amount in cart state.
 * @param {number} productIndex The index of the product in cart
 * @param {number} amount the new value to be updated
 * @return The action call, product index and new amount.
 */
export const updateAmountSuccess = (productIndex, amount) => {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    productIndex,
    amount,
  };
};
