import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import CourseSection from '../pages/CourseSection';
import Signup from '../pages/Signup';
import Tabs from '../components/Tabs';
import Module from '../pages/Module';

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
    Signup: {
      screen: Signup,
      navigationOptions: {headerShown: false},
    },
    UserArea: {
      screen: Tabs,
      navigationOptions: {headerShown: false, gestureEnabled: false},
    },
    CourseSection: {
      screen: CourseSection,
      navigationOptions: {headerShown: false, gestureEnabled: false},
    },
    Module: {
      screen: Module,
      navigationOptions: {headerShown: false, gestureEnabled: false},
    },
  }),
);
