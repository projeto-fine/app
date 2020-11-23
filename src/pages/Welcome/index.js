import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logoImage from '../../assets/images/logoHor.png';
import Button from '../../components/Button';
import {Container, Content, LinkText, Logo, Text} from './style';

//remove after login implementation
const saveUserID = async () => {
  try {
    await AsyncStorage.setItem('@userId', '5f9d8704a9fc884cfae17fb3');
  } catch (e) {
    console.error(e);
  }
};

const Login = ({navigation}) => {
  const handleLogin = () => {
    saveUserID();
    navigation.navigate('UserArea');
  };
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <Container>
      <Content>
        <Logo source={logoImage} />
        <Text>A educação financeira nunca foi tão fácil</Text>
        <Button onPress={handleSignup} text="Cadastre-se" />
        <LinkText onPress={handleLogin}>Já tem conta? Entre aqui</LinkText>
      </Content>
    </Container>
  );
};

export default Login;
