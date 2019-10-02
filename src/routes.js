import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import colors from './styles/global';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      // just fot test TODO
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#7159c1' },
        headerTintColor: '#FFF',
      },
      cardStyle: {
        backgroundColor: colors.dark,
      },
    }
  )
);

export default Routes;
