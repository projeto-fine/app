import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  background-color: #efe8e0;
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
  color: #3f414e;
  font-weight: 400;
  width: 200px;
  margin-top: 25px;
  margin-bottom: 140px;
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
