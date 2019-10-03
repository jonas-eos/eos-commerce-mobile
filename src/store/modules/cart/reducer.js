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
     * items in the cart.
     * If any current item with same id from the action item exists, the item
     * quantity is manipulated, preventing the item from appearing duplicate in
     * the cart, so every time you add a new item through HomeScreen, add +1 to
     * the item quantity.
     */
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const nextState = draft;

        const productIndex = nextState.findIndex(
          product => product.id === action.item.id
        );

        if (productIndex >= 0) {
          nextState[productIndex].amount += 1;
        } else {
          draft.push({ ...action.item, amount: 1 });
        }
      });
    default:
      return state;
  }
}
