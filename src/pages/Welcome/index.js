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
    navigation.navigate('UserArea');
  };

  return (
    <Container>
      <Content>
        <Logo source={logoImage} />
        <Text>A educação financeira nunca foi tão fácil</Text>
        <Button onPress={handleLogin}>
          <ButtonText>Entrar</ButtonText>
        </Button>
        <LinkText onPress={() => {}}>Não tem conta? Cadastre-se aqui</LinkText>
      </Content>
    </Container>
  );
};

export default Login;
