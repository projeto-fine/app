import React from 'react';
import {Button, Container, Heading} from './style';

const Login = ({navigation}) => {
  return (
    <Container>
      <Heading>Que bom ter você de volta!</Heading>
      {/* TODO cognito login w google */}
      <Button onPress={() => {}} title="CONTINUE WITH GOOGLE" />
    </Container>
  );
};

export default Login;
