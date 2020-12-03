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
import {getUserInfo} from '~/services/feed';

const Profile = ({navigation}) => {
  const getUser = async () => {
    const res = await getUserInfo();
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <Header>
        <ProfileImage />
        <RightColumn>
          <UserName>Rafaela Cabral</UserName>
          <UserPoints>1225 pontos</UserPoints>
          <UserLevel>1225 pontos</UserLevel>
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
