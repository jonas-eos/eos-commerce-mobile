/**
 * @overview
 * This document update global state
 * in app.
 */
import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    /** Action to add itens to cart */
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });

    /** Action to remove itens to cart */
    case '@cart/REMOVE_SUCCESS':
      return produce(state, draft => {
        const { productIndex } = action;
        draft.splice(productIndex, 1);
      });

    /** Action to update item amount in cart */
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const { productIndex, amount } = action;
        const nextState = draft;
        nextState[productIndex].amount = Number(amount);
      });
    default:
      return state;
  }
}
