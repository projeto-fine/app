import React from 'react';
import logoImage from '../../assets/images/logoHor.png';
import {
  Container,
  Heading,
  SubHeading,
  CourseCard,
  BeginnersHeading,
  CourseTitle,
  ProgressBar,
  ProgressBarInside,
  CourseLevelBox,
  CourseLevelTitle,
  CardList,
} from './style';

const Courses = ({navigation}) => {
  const cursos = [
    {
      name: 'Primeiros Passos',
      level: 'Iniciante',
      progress: 0,
    },
    {
      name: 'Educação Financeira',
      level: 'Iniciante',
      progress: 45,
    },
    {
      name: 'Primeiros Passos',
      level: 'Iniciante',
      progress: 60,
    },
    {
      name: 'Primeiros Passos',
      level: 'Iniciante',
      progress: 40,
    },
  ];
  return (
    <Container>
      <Heading>Oi, Anna</Heading>
      <SubHeading>Quantos pontos você irá ganhar hoje?</SubHeading>
      <BeginnersHeading textColor="#6114D4">Começando agora</BeginnersHeading>
      <CardList horizontal>
        {cursos.map((item) => (
          <CourseCard backgroundColor="#917FFB">
            <CourseLevelBox>
              <CourseLevelTitle textColor="#6114d4">
                {item.level}
              </CourseLevelTitle>
            </CourseLevelBox>
            <CourseTitle>{item.name}</CourseTitle>
            <ProgressBar>
              <ProgressBarInside progress={item.progress} />
            </ProgressBar>
          </CourseCard>
        ))}
      </CardList>
      <BeginnersHeading textColor="#D64853">Chegando Lá</BeginnersHeading>
      <CardList horizontal>
        {cursos.map((item) => (
          <CourseCard backgroundColor="#D64853">
            <CourseLevelBox>
              <CourseLevelTitle textColor="#CC3936">
                {item.level}
              </CourseLevelTitle>
            </CourseLevelBox>
            <CourseTitle>{item.name}</CourseTitle>
            <ProgressBar>
              <ProgressBarInside progress={item.progress} />
            </ProgressBar>
          </CourseCard>
        ))}
      </CardList>
    </Container>
  );
};

export default Courses;
