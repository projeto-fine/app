import React from 'react';
import logoImage from '../../assets/images/logoHor.png';
import {
  Button,
  ButtonText,
  Container,
  Content,
  LinkText,
  Logo,
  Text,
} from './style';

const Login = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Content>
        <Logo source={logoImage} />
        <Text>A educação financeira nunca foi tão fácil</Text>
        <Button onPress={handleLogin}>
          <ButtonText>Cadastre-se</ButtonText>
        </Button>
        <LinkText onPress={() => {}}>Já tem conta? Entre aqui</LinkText>
      </Content>
    </Container>
  );
};

export default Login;
