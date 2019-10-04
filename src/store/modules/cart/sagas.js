import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess } from './actions';

/**
 * This method get a product by id via API REST
 * Call the add to cart action, passing all product data to update int the
 * global state.
 * @param {Number} productId
 * @generator
 * @yields {object} The product data.
 */
function* addToCart({ productId }) {
  const response = yield call(api.get, `/products/${productId}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
