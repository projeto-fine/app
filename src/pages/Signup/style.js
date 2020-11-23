import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #6114d4;
  min-height: 100%;
`;

export const Heading = styled.Text`
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  margin: 30px 0;
  color: #f2f2f2;
`;

export const LinkText = styled.Text`
  color: #ffffff;
  margin-top: 10px;
  font-family: 'Open Sans';
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #ffffff;
  font-size: 16px;
`;

export const Content = styled.View`
  margin: 60px 0 25px;
`;

export const Input = styled.TextInput`
  width: 270px;
  background-color: #ececf2;
  border-radius: 5px;
  padding: 16px;
  margin-top: 15px;
  font-size: 18px;
  color: #828282;
`;

export const ContentText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Open Sans';
  font-weight: 700;
  text-align: center;
`;
export const GoogleButton = styled.TouchableOpacity`
  width: 270px;
  background-color: white;
  padding: 10px;
  border-radius: 38px;
`;

export const ButtonText = styled.Text`
  font-family: 'Open Sans';
  font-weight: 700;
  text-align: center;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
`;
