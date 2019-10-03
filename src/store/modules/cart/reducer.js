/**
 * @overview
 * This document update global state
 * in app.
 */
import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    /**
     * Action to add itens to cart
     * Before changing the global state, it is checked if there are already any
     * products in the cart.
     * If any current product with same id from the action product exists, the product
     * quantity is manipulated, preventing the product from appearing duplicate in
     * the cart, so every time you add a new product through HomeScreen, add +1 to
     * the product quantity.
     */
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const nextState = draft;

        const productIndex = nextState.findIndex(
          product => product.id === action.product.id
        );

        if (productIndex >= 0) {
          nextState[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });

    /**
     * Action to remove itens to cart
     * This action first searches for which index the item that came from the
     * action is located, and then deletes this item from the cart.
     */
    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.product.id
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
