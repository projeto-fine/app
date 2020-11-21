import React from 'react';
import {Btn, ButtonText} from './styles';

export default function Button(props) {
  const {text, onPress} = props;
  return (
    <Btn onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Btn>
  );
}
