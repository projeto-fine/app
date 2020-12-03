import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: flex-start;
  height: 100%;
`;

export const Content = styled.View`
  margin: 30px;
`;
export const BannerImage = styled.Image`
  height: 150;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Description = styled.Text`
  font-size: 14px;
  text-align: justify;
`;
