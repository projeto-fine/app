import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
import Profile from './../../pages/Profile';
import CoursesPage from '~/pages/CoursesPage/index';
import ModulesPage from '~/pages/ModulesPage/index';
import ContentList from '~/pages/ContentList/index';
import ContentPage from '~/pages/ContentPage/index';

const Tab = createBottomTabNavigator();
const CoursesStack = createStackNavigator();

function CoursesStackScreen() {
  return (
    <CoursesStack.Navigator>
      <CoursesStack.Screen
        name="CoursesPage"
        component={CoursesPage}
        options={{headerShown: false}}
      />
      <CoursesStack.Screen name="ModulesPage" component={ModulesPage} />
      <CoursesStack.Screen name="ContentList" component={ContentList} />
      <CoursesStack.Screen name="ContentPage" component={ContentPage} />
    </CoursesStack.Navigator>
  );
}

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
        <Tab.Screen name="Cursos" component={CoursesStackScreen} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
