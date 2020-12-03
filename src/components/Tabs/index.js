import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Feed from '../../pages/Feed';
import cursosIcon from '../../assets/images/cursos.png';
import cursosOutlinedIcon from '../../assets/images/cursos-outlined.png';
import homeIcon from '../../assets/images/home.png';
import homeOutlineIcon from '../../assets/images/home-outlined.png';
import userIcon from '../../assets/images/user.png';
import userOutlinedIcon from '../../assets/images/user-outlined.png';
import {Icon, Heading, Container} from './style';
import theme from '~/helpers/theme';
import Courses from './../../pages/Courses';
import Profile from './../../pages/Profile';
import CourseSection from '~/pages/CourseSection/index';

const Tab = createBottomTabNavigator();

const workInProgress = () => {
  return (
    <Container>
      <Heading>Em construção</Heading>
    </Container>
  );
};

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    switch (route.name) {
      case 'Início':
        return focused ? (
          <Icon source={homeIcon} />
        ) : (
          <Icon source={homeOutlineIcon} />
        );
      case 'Cursos':
        return focused ? (
          <Icon source={cursosIcon} />
        ) : (
          <Icon source={cursosOutlinedIcon} />
        );
      case 'Perfil':
        return focused ? (
          <Icon source={userIcon} />
        ) : (
          <Icon source={userOutlinedIcon} />
        );
    }
  },
});

const tabBarOptions = {
  activeTintColor: 'white',
  inactiveTintColor: 'white',
  style: {
    height: 85,
    backgroundColor: theme.mainColor,
    borderRadius: 10,
  },
};

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Início" component={Feed} />
        <Tab.Screen name="Cursos" component={CourseSection} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
