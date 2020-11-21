import React from 'react';
import logoImage from '../../assets/images/logoHor.png';
import Button from '../../components/Button';
import {Container, Content, LinkText, Logo, Text} from './style';

const Login = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Login');
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
