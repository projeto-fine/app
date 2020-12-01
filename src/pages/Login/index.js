import React from 'react';
import Button from '../../components/Button';
import {
  Container,
  Heading,
  Content,
  Input,
  LinkText,
  ContentText,
  GoogleButton,
  ButtonText,
} from './style';

const Login = ({navigation}) => {
  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    navigation.navigate('UserArea');
  };

  return (
    <Container>
      <Heading>Bem-vinde de volta!</Heading>
      {/* TODO cognito login w google */}
      <GoogleButton>
        <ButtonText>CONTINUE COM O GOOGLE</ButtonText>
      </GoogleButton>
      <Content>
        <ContentText>OU ENTRE COM O EMAIL</ContentText>
        <Input placeholder="EMAIL"></Input>
        <Input placeholder="SENHA"></Input>
        <LinkText>Esqueceu a senha?</LinkText>
      </Content>
      <Button text="ENTRAR" onPress={handleLogin} />
      <LinkText onPress={handleSignup}>Não tem conta? Cadastre-se</LinkText>
    </Container>
  );
};

export default Login;
