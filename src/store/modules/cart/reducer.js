/**
 * @overview
 * This document update global state
 * in app.
 */
export default function cart(state = [], action) {
  switch (action.type) {
    /** action to add itens to cart */
    case 'ADD_TO_CART':
      return [...state, action.item];
    default:
      return state;
  }
}
