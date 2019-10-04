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

    /**
     * Action to remove itens to cart
     * This action first searches for which index the item that came from the
     * action is located, and then deletes this item from the cart.
     */
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          product => product.id === action.productId
        );

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    /**
     * Action to update itens in cart
     * This action first searches for which index the item that came from the
     * action is located, and then update this item in cart if the total amount
     * is not <= 0.
     */
    case '@cart/UPDATE_AMOUNT':
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const nextState = draft;

        const productIndex = nextState.findIndex(
          product => product.id === action.productId
        );

        if (productIndex >= 0) {
          nextState[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
