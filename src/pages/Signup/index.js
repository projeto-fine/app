import React from 'react';
import Button from '../../components/Button';
import {
  Container,
  Content,
  ContentText,
  GoogleButton,
  Heading,
  ButtonText,
  Input,
} from './style';
export default function Signup() {
  return (
    <Container>
      <Heading>Crie sua conta!</Heading>
      <GoogleButton>
        <ButtonText>CONTINUE COM O GOOGLE</ButtonText>
      </GoogleButton>
      <Content>
        <ContentText>OU CADASTRE-SE COM O EMAIL</ContentText>
        <Input placeholder="NOME"></Input>
        <Input placeholder="EMAIL"></Input>
        {/* TODO olhinho pra tirar a visibilidade da senha */}
        <Input placeholder="SENHA"></Input>
      </Content>
      <Button text="ENTRAR" />
    </Container>
  );
}
