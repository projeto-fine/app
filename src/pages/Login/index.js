import React, { useState } from 'react';
import {Button, Container, Heading, LoginField, ButtonText, LinkText, Icon, LoginView} from './style';
// import { Authenticator, SignIn } from 'aws-amplify-react-native';
import leftArrowIcon from '../../assets/images/leftArrow.png';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <LoginView>
      <Container>
        {/* <Container> */}
          <Icon source={leftArrowIcon}/>
        {/* </Container> */}
        <Heading>Que bom ter você de volta!</Heading>
      </Container>
      <Container>
        <LoginField
          value={username}
          keyboardType = 'email-address'
          onChangeText={(username) => setUsername(username)}
          placeholder='E-mail'
          placeholderTextColor = 'black'
        />
        <LoginField
          value={password}  
          onChangeText={(password) => setState(password)}
          placeholder={'Senha'}
          secureTextEntry={true}
          placeholderTextColor = 'black'
        />
        <LinkText>Esqueceu sua senha?</LinkText>
      </Container>
      <Container>
        <Button>
          <ButtonText>ENTRAR</ButtonText>
        </Button>
        <LinkText>Não tem conta? Cadastre-se.</LinkText>
      </Container>
    </LoginView>
  );
};

export default Login;
