import React, {useState, useEffect} from 'react';
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
import {TouchableOpacity} from 'react-native';
import noUserIcon from '~/assets/images/noPictureUser.png';
import heartIcon from '~/assets/images/heart.png';
import saveIcon from '~/assets/images/save.png';
import heartOutlinedIcon from '~/assets/images/heart-outlined.png';
import saveOutlinedIcon from '~/assets/images/save-outlined.png';
import {updatePostData} from '~/services/feed';
import enumFine from '~/helpers/enum';

const Card = ({
  id,
  name,
  title,
  description,
  userIcon,
  image,
  isSaved,
  isLiked,
}) => {
  const [liked, setLiked] = useState(isLiked || false);
  const [saved, setSaved] = useState(isSaved || false);

  const updateLike = () => {
    setLiked((prev) => !prev);
    const type = liked ? enumFine.type.decrement : enumFine.type.increment;
    updatePostData(id, enumFine.interactionType.like, type);
  };

  const updateSave = () => {
    setSaved((prev) => !prev);
    const type = saved ? enumFine.type.decrement : enumFine.type.increment;
    updatePostData(id, enumFine.interactionType.save, type);
  };

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
        <TouchableOpacity onPress={updateLike}>
          {liked ? (
            <LikeIcon source={heartIcon} />
          ) : (
            <LikeIcon source={heartOutlinedIcon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={updateSave}>
          {saved ? (
            <SaveIcon source={saveIcon} />
          ) : (
            <SaveIcon source={saveOutlinedIcon} />
          )}
        </TouchableOpacity>
      </Icons>
    </Container>
  );
};

export default Card;
