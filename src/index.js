import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

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
