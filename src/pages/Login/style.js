import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const Heading = styled.Text`
  font-family: 'Open Sans';
  font-weight: 800;
  font-size: 24px;
  text-align: center;
  color: #3f414e;
`;

export const Button = styled.Button`
  width: 270px;
  background-color: #454d58;
  padding: 10px;
  border-radius: 38px;
  position: absolute;
  top: 280px;
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
