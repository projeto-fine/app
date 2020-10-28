import React from 'react';
import {
  Container,
  Header,
  Title,
  Subtitle,
  Description,
  UserIcon,
  Column,
  Icons,
  LikeIcon,
  SaveIcon,
} from './style';
import noUserIcon from '../../assets/images/noPictureUser.png';
import heartIcon from '../../assets/images/heart.png';
import saveIcon from '../../assets/images/save.png';

const Card = ({title, subtitle, description, userIcon}) => {
  return (
    <Container>
      <Header>
        <UserIcon source={userIcon || noUserIcon} />
        <Column>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Column>
      </Header>
      <Description>{description}</Description>
      <Icons>
        <LikeIcon source={heartIcon} />
        <SaveIcon source={saveIcon} />
      </Icons>
    </Container>
  );
};

export default Card;
