import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatUsd } from '../../../util/format';
import {
  addToCartSuccess,
  removeFromCartSuccess,
  updateAmount,
} from './actions';

/**
 * Searches the global state for a product according to the request id.
 * If the product is already in the state, only add mount in cart.
 * If the product is not in state, a request is sent to the API, and the cart
 * is updated with the return data from the API.
 * @param {Number} productId
 * @generator
 * @yields {object} The product data.
 */
function* addToCart({ productId }) {
  /** Looking foward product by id */
  const productExists = yield select(state =>
    state.cart.find(product => product.id === productId)
  );

  /** Rules to manipulate the cart */
  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmount(productId, amount));
  } else {
    const response = yield call(api.get, `/products/${productId}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatUsd(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}
/**
 * Take the index number from the product in the cart and send it to the reducer
 * remove.
 * @param {Number} productId
 * @generator
 * @yields {Number} The product index in cart.
 */
function* removeToCart({ productId }) {
  const productIndex = yield select(state =>
    state.cart.findIndex(product => product.id === productId)
  );

  yield put(removeFromCartSuccess(productIndex));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/REMOVE_REQUEST', removeToCart),
]);
