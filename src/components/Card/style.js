import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto 20px;
  width: 90%;
  background-color: white;
  border-radius: 10px;
  padding: 15px 20px;
`;

export const UserIcon = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
`;

export const Title = styled.Text`
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 12px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-family: 'Open Sans';
  font-weight: 300;
  font-size: 14px;
`;

export const Icons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const LikeIcon = styled.Image`
  width: 22px;
  height: 20px;
`;

export const SaveIcon = styled.Image`
  width: 18px;
  height: 20px;
  margin-left: 10px;
`;

export const Image = styled.Image`
  margin-top: 15px;
  height: 173px;
`;
