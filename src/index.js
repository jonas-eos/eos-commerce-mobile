import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/pt-BR';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Provider>
    </>
  );
};

export default App;
