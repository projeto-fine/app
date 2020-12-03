import React, {useEffect} from 'react';
import {
  Container,
  Header,
  ProfileImage,
  RightColumn,
  UserName,
  UserPoints,
  UserLevel,
  Title,
  Folder,
  FolderImage,
  FolderName,
} from './style';

const Profile = ({navigation}) => {
  return (
    <Container>
      <Header>
        <ProfileImage
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/11897614?s=460&u=7a8341c2b97e26c854515421e046326198879860&v=4',
          }}
        />
        <RightColumn>
          <UserName>Anna Gabriela</UserName>
          <UserPoints>1225 pontos</UserPoints>
          <UserLevel>Iniciante</UserLevel>
        </RightColumn>
      </Header>
      <Title>Publicações salvas:</Title>
      <Folder>
        <FolderImage />
        <FolderName>Dicas</FolderName>
      </Folder>
    </Container>
  );
};

export default Profile;
