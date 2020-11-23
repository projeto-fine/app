import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Tabs from '../components/Tabs';

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
    UserArea: {
      screen: Tabs,
      navigationOptions: {headerShown: false, gestureEnabled: false},
    },
  }),
);
