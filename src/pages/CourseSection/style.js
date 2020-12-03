import styled from 'styled-components/native';

export const Heading = styled.Text`
  color: #000000;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: left;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const CardList = styled.ScrollView`
  max-height: 200px;
  padding: 10px;
`;

export const Module = styled.Text`
  margin-bottom: 40px;
`;

export const ModuleNumber = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  margin-left: 10px;
  color: #6114d4;
`;

export const ModuleContent = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

export const ModuleTitle = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: 10px 12px 0px;
  width: 170px;
  color: #6114d4;
`;

export const ModuleCard = styled.View`
  width: 335px;
  height: 69px;

  margin: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  margin-left: 43px;
  height: 16px;
  width: 12px;
`;

export const ModuleList = styled.ScrollView`
  margin-top: 20px;
  max-height: 360px;
`;

export const Header = styled.View`
  display: flex;
  width: 335px;
`;
