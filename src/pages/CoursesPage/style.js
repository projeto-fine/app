import styled from 'styled-components/native';

export const Heading = styled.Text`
  color: #6114d4;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin: 5px 40px 5px 20px;
`;

export const SubHeading = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  margin: 5px 20px;
  color: #454d58;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const CourseCard = styled.TouchableOpacity`
  height: 180px;
  width: 142px;
  background-color: ${(props) => props.backgroundColor};
  margin-left: 20px;
  border-radius: 10px;
`;

export const BeginnersHeading = styled.Text`
  font-family: Open Sans;
  font-size: 18px;
  margin: 20px;
  color: ${(props) => props.textColor};
`;

export const CourseLevelBox = styled.View`
  width: 61px;
  height: 21px;
  margin: 9px 13px;
  opacity: 0.7;
  border-radius: 4px;
  background: #ececf2;
`;

export const CourseLevelTitle = styled.Text`
  font-family: Open Sans;
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.textColor};
`;

export const CourseTitle = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ececf2;
  width: 112px;
  margin-top: 53px;
  margin-left: 10px;
`;

export const CardList = styled.ScrollView`
  max-height: 200px;
`;
