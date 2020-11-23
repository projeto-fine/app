import styled from 'styled-components/native';

export const Heading = styled.Text`
  color: gray;
  text-align: center;
  font-size: 18px;
  margin-top: 80px;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const View = styled.View`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  min-height: 90%;
`;

export const CardList = styled.FlatList`
  margin-bottom: 50px;
`;

export const Loading = styled.ActivityIndicator``;
