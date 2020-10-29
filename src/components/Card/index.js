import React from 'react';
import {
  Container,
  Header,
  Name,
  Title,
  Description,
  UserIcon,
  Column,
  Icons,
  LikeIcon,
  SaveIcon,
  Image,
} from './style';
import noUserIcon from '../../assets/images/noPictureUser.png';
import heartIcon from '../../assets/images/heart.png';
import saveIcon from '../../assets/images/save.png';

const Card = ({name, title, description, userIcon, image}) => {
  return (
    <Container>
      <Header>
        <UserIcon source={userIcon ? {uri: userIcon} : noUserIcon} />
        <Column>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </Column>
      </Header>
      {image && <Image source={{uri: image}} />}
      <Description>{description}</Description>
      <Icons>
        <LikeIcon source={heartIcon} />
        <SaveIcon source={saveIcon} />
      </Icons>
    </Container>
  );
};

export default Card;
