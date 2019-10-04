import { Alert } from 'react-native';
import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatUsd } from '../../../util/format';
import {
  addToCartSuccess,
  removeFromCartSuccess,
  updateAmountSuccess,
} from './actions';

/**
 * Searches the global state for a product according to the request id.
 * If the product is already in the state, only add mount in cart.
 * If the product is not in state, a request is sent to the API, and the cart
 * is updated with the return data from the API.
 * The amount of product you add to cart cannot be greater than the total amount
 * in stock.
 * @param {Number} productId
 * @generator
 * @yields {object} The product data.
 */
function* addToCart({ productId }) {
  /** Looking foward product by id */
  const productExists = yield select(state =>
    state.cart.find(product => product.id === productId)
  );

  /** Get the product stock */
  const stock = yield call(api.get, `/stock/${productId}`);

  const { amount: stockAmount } = stock.data;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Requested quantity out of stock.');
    return;
  }

  /** Rules to manipulate the cart */
  if (productExists) {
    const productIndex = yield select(state =>
      state.cart.findIndex(product => product.id === productId)
    );

    yield put(updateAmountSuccess(productIndex, amount));
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

/**
 * The amount cannot be less than 0.
 * The action must be send informing the product index in the cart, and the new
 * quantity that will be updated in the cart.
 * The amount of product you add to cart cannot be greater than the total amount
 * in stock.
 * @param {Number} productId
 * @param {Number} amount - The new value to be updated
 * @generator
 * @yields {Number} product index and amount
 */
function* updateAmount({ productId, amount }) {
  if (amount <= 0) {
    return;
  }

  const productIndex = yield select(state =>
    state.cart.findIndex(product => product.id === productId)
  );

  const stock = yield call(api.get, `/stock/${productId}`);

  const { amount: stockAmount } = stock.data;

  if (amount > stockAmount) {
    Alert.alert('Requested quantity out of stock.');
    return;
  }

  yield put(updateAmountSuccess(productIndex, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/REMOVE_REQUEST', removeToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
