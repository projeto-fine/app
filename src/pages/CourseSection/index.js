import React from 'react';
import ProgressBar from '~/components/ProgressBar/index';
import {
  Container,
  Heading,
  Module,
  ModuleNumber,
  ModuleContent,
  ModuleTitle,
  ModuleCard,
  Image,
  ModuleList,
  Header,
} from './style';
import ChevronRight from '../../assets/images/chevron_right_24px.png';

export default function CourseSection({navigation}) {
  return (
    <Container>
      <Header>
        <TitleBox>
          <CourseTitle>Primeiro Salario</CourseTitle>
        </TitleBox>
        <Heading>Educação Fiddnanceira</Heading>
        <Module>1 de 4 concluídos</Module>
      </Header>
      <ModuleList>
        {[1, 2, 3, 4, 5].map((module, index) => (
          <ModuleCard key={index}>
            <ModuleNumber>{index + 1}.</ModuleNumber>
            <ModuleContent>
              <ModuleTitle>Valor</ModuleTitle>
              <ProgressBar progress={30} bg="variant" />
            </ModuleContent>
            <Image source={ChevronRight} />
          </ModuleCard>
        ))}
      </ModuleList>
    </Container>
  );
}
