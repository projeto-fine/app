import React from 'react';
import {
  TitleBox,
  CourseTitle,
  ChevronLeftImage,
  Container,
  Header,
  ContentList,
  ContentCover,
  ContentType,
  ContentHeader,
  ContentDescription,
  ProfessorHeader,
  ProfessorContent,
  ProfessorImage,
} from './style';
import ChevronLeft from '../../assets/images/chevron_left_24px.png';
import {Content} from './style';

export default function Module() {
  return (
    <Container>
      <Header>
        <TitleBox>
          <ChevronLeftImage source={ChevronLeft} />
          <CourseTitle>Primeiro Salário</CourseTitle>
        </TitleBox>
      </Header>
      <ContentList horizontal>
        {[1, 2, 3].map((item) => (
          <Content>
            <ContentCover />
            <ContentHeader>
              <ContentType>Video aula</ContentType>
              <ContentType></ContentType>
            </ContentHeader>
            <ContentDescription>
              Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso Lorem ipso
              Lorem ipso Lorem ipso Lorem ipso
            </ContentDescription>
          </Content>
        ))}
      </ContentList>
      <ProfessorContent>
        <ProfessorHeader>Especialista</ProfessorHeader>
        <ProfessorImage />
      </ProfessorContent>
    </Container>
  );
}
