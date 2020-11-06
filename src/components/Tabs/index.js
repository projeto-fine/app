import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Feed from '../../pages/Feed';
import cursosIcon from '../../assets/images/cursos.png';
import homeIcon from '../../assets/images/home.png';
import perfilIcon from '../../assets/images/user.png';
import {Icon, Heading, Container} from './style';

const Tab = createBottomTabNavigator();

const workInProgress = () => {
  return (
    <Container>
      <Heading>Em construção</Heading>
    </Container>
  );
};

const screenOptions = ({route}) => ({
  tabBarIcon: () => {
    switch (route.name) {
      case 'Início':
        return <Icon source={homeIcon} />;
      case 'Cursos':
        return <Icon source={cursosIcon} />;
      case 'Perfil':
        return <Icon source={perfilIcon} />;
    }
  },
});

const tabBarOptions = {
  activeTintColor: 'black',
  inactiveTintColor: 'gray',
};

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Início" component={Feed} />
        <Tab.Screen name="Cursos" component={workInProgress} />
        <Tab.Screen name="Perfil" component={workInProgress} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
