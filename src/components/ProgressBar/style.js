import styled from 'styled-components/native';

export const ProgressBarComponent = styled.View`
  width: 116px;
  height: 6px;
  background-color: ${(props) =>
    props.bg === 'variant' ? '#B8BBF8' : 'white'};
  border: 0.5px solid #ffffff;
  margin: 10px 13px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const ProgressBarInside = styled.View`
  margin: 0 1px;
  width: ${(props) => props.progress + '%'};
  max-width: 113px;
  background-color: #d64853;
  height: 2px;
`;
