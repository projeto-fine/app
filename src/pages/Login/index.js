import React, { useState } from 'react';
import { Alert } from 'react-native';
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
import { Auth } from 'aws-amplify';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  
  const handleLogin = async () => {
    try {
      await Auth.signIn(email, password);
      navigation.navigate('UserArea');
    } catch (e) {
      Alert.alert(
        "Tente novamente",
        "E-mail ou senha inválidos",
        [
          {
            text: "Ok"
          }
        ],
        { cancelable: false }
      );
    }
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
        <Input placeholder="EMAIL" value={email} onChangeText={setEmail}></Input>
        <Input placeholder="SENHA" value={password} onChangeText={setPassword} secureTextEntry></Input>
        <LinkText>Esqueceu a senha?</LinkText>
      </Content>
      <Button text="ENTRAR" onPress={handleLogin} />
      <LinkText onPress={handleSignup}>Não tem conta? Cadastre-se</LinkText>
    </Container>
  );
};

export default Login;
