/**
 * @overview
 * This document connect all app with the rootReducer
 * named as store.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

/** Create a saga middlware to intecerpt actions before go to reducers */
const sagaMiddleware = createSagaMiddleware();

const enhancer =
  /** ##DEV-MODE ONLY - LOG CONTROL */
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleware)
      )
    : applyMiddleware(sagaMiddleware);
/** ##END-DEV-MOD */

const store = createStore(rootReducer, enhancer);

/** Interceptor, send the actions to rootSaga */
sagaMiddleware.run(rootSaga);

export default store;
