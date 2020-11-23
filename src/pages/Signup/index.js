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
  PasswordIcon,
  PasswordInput,
} from './style';
import passIcon from '~/assets/images/secure-pass-icon.png';

export default function Signup() {
  return (
    <Container>
      <Heading>Crie sua conta!</Heading>
      <GoogleButton>
        <ButtonText>CONTINUE COM O GOOGLE</ButtonText>
      </GoogleButton>
      <Content>
        <ContentText>OU CADASTRE-SE COM O EMAIL</ContentText>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <PasswordInput placeholder="Senha" secureTextEntry={true}>
          <PasswordIcon source={passIcon} />
        </PasswordInput>
      </Content>
      <Button text="ENTRAR" />
    </Container>
  );
}
