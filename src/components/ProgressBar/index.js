import React from 'react';
import {ProgressBarComponent, ProgressBarInside} from './style';
export default function ProgressBar(props) {
  const {progress, bg} = props;
  return (
    <ProgressBarComponent bg={bg}>
      <ProgressBarInside progress={progress} />
    </ProgressBarComponent>
  );
}
