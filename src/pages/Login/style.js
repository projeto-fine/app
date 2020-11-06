import styled from 'styled-components/native';

export const LoginView = styled.View`
  display: flex;
  justify-content: space-between;
  align-self:center;
  align-items: center;
  min-height: 80%;
  max-height: 90%;
`;

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  font-family: 'Open Sans';
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  color: #3f414e;
`;

export const Button = styled.TouchableOpacity`
  width: 270px;
  background-color: red;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 38px;
  background-color: #454D58;
  height: 45px;
`;

export const LinkText = styled.Text`
  font-family: 'Open Sans';
  text-align: center;
  text-decoration: underline;
  color: #3f414e;
  font-size: 16px;
`;

export const LoginField = styled.TextInput`
  width: 300px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 15px;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  padding-left: 20px;
`

export const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
`

export const Icon = styled.Image`
  margin-top: 50px;
  border-radius: 50px;
  border: 1px black;
`