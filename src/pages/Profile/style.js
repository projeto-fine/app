import styled from 'styled-components/native';
import theme from '~/helpers/theme';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  margin: 100px 30px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 30px;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const RightColumn = styled.View`
  margin-left: 15px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.mainColor};
  margin-bottom: 5px;
`;

export const UserPoints = styled.Text`
  color: gray;
`;

export const UserLevel = styled.Text`
  color: gray;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
`;

export const Folder = styled.View`
  margin-top: 15px;
`;

export const FolderImage = styled.View`
  background-color: lightslategray;
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export const FolderName = styled.Text`
  width: 60px;
  margin: 5px 0;
  text-align: center;
  color: ${theme.mainColor};
`;
