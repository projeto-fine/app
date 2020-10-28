import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';

export default createAppContainer(
  createStackNavigator({
    Welcome: {
      screen: Welcome,
      navigationOptions: {headerShown: false},
    },
    Login: {
      screen: Login,
      navigationOptions: {headerShown: false},
    },
  }),
);
