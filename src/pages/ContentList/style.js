import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const TitleBox = styled.View`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const CourseTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  margin-left: 40px;
  /* identical to box height */

  color: #6114d4;
`;

export const ChevronLeftImage = styled.Image`
  height: 24px;
  width: 24px;
`;

export const Header = styled.View`
  display: flex;
  width: 335px;
`;

export const Content = styled.View`
  width: 193px;
  height: 306px;
  margin: 10px;
  background: #efe8e0;
  border-radius: 14px;
`;
export const ContentListContainer = styled.ScrollView`
  display: flex;
  flex-direction: row;
  margin: 0 10px 0 25px;
  max-height: 330px;
`;

export const ContentCover = styled.View`
  height: 170px;
  background-color: black;
  border-radius: 14px;
`;

export const ContentHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContentType = styled.Text`
  margin-top: 10px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #6114d4;
`;

export const ContentDescription = styled.Text`
  margin: 10px;
  height: 100px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  color: #6114d4;
`;

export const ProfessorHeader = styled.Text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #d64853;
`;

export const ProfessorContent = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 335px;
  margin: 30px 0;
  height: 200px;
`;

export const ProfessorImage = styled.View`
  width: 77px;
  height: 77px;
  border-radius: 50px;
  background-color: black;
  margin: 20px 0;
`;
