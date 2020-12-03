import styled from 'styled-components/native';

export const Heading = styled.Text`
  color: #000000;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
`;

export const SubHeading = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #454d58;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 20px;
`;

export const CourseCard = styled.View`
  height: 180px;
  width: 142px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

export const BeginnersHeading = styled.Text`
  font-family: Open Sans;
  font-size: 18px;
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

export const Module = styled.Text``;

export const ModuleNumber = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  margin-left: 10px;
  color: #6114d4;
`;

export const ModuleContent = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 10px;
`;

export const ModuleTitle = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin: 10px 12px 0px;
  width: 170px;
  color: #6114d4;
`;

export const ModuleCard = styled.View`
  width: 335px;
  height: 69px;

  margin: 10px 0;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  margin-left: 53px;
`;

export const ModuleList = styled.ScrollView`
  margin-top: 20px;
  max-height: 400px;
`;
