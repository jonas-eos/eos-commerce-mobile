import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import colors from './styles/global';
import Header from './components/Header';
import HomeScreen from './pages/Home';
import CartScreen from './pages/Cart';

const MainNavigatior = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Cart: { screen: CartScreen },
  },
  {
    defaultNavigationOptions: navigation => ({
      header: (
        <Header
          navigation={navigation.navigation}
          cartSize={navigation.cartSize}
        />
      ),
    }),
    cardStyle: {
      backgroundColor: colors.dark,
    },
  }
);

const Routes = createAppContainer(MainNavigatior);

export default Routes;
