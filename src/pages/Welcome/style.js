import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 258px;
  height: 72px;
`;

export const Text = styled.Text`
  font-family: 'Open Sans';
  font-size: 16px;
  text-align: center;
  color: #a1a4b2;
  font-weight: 400;
  width: 200px;
  margin-top: 25px;
`;

export const Button = styled.TouchableOpacity`
  width: 270px;
  background-color: #454d58;
  padding: 10px;
  border-radius: 38px;
  position: absolute;
  top: 280px;
`;

export const ButtonText = styled.Text`
  font-family: 'Open Sans';
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  text-transform: uppercase;
`;

export const LinkText = styled.Text`
  font-family: 'Open Sans';
  text-align: center;
  text-decoration: underline;
  color: #3f414e;
  font-size: 16px;
  position: absolute;
  top: 340px;
`;
