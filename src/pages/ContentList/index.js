import React from 'react';
import {
  TitleBox,
  CourseTitle,
  ChevronLeftImage,
  Container,
  Header,
  ContentListContainer,
  ContentCover,
  ContentType,
  ContentHeader,
  ContentDescription,
  ProfessorHeader,
  ProfessorContent,
  ProfessorImage,
  ProfessorName,
} from './style';
import ChevronLeft from '../../assets/images/chevron_left_24px.png';
import {Content} from './style';

export default function ContentList() {
  const content = [
    {
      contentType: 'Video Aula',
      description:
        'Nessa lição você vai aprender tudo o que precisa saber para calcular o valor do trabalho aplicado a finanças.',
      imageUrl:
        'https://fdr.com.br/wp-content/uploads/2020/05/piggy-bank-2889042_1920-1024x614.jpg',
    },
    {
      contentType: 'Video Aula',
      description:
        'Se você tem metas e sonhos a realizar, que tal aprender como guardar dinheiro e colocar essa entre as suas resoluções de 2020?',
      imageUrl:
        'https://blog.rico.com.vc/hs-fs/hubfs/como-guardar-dinheiro-19-passos-para-economizar.jpg?width=2000&name=como-guardar-dinheiro-19-passos-para-economizar.jpg',
    },
  ];
  return (
    <Container>
      <Header>
        <TitleBox>
          <ChevronLeftImage source={ChevronLeft} />
          <CourseTitle>Primeiro Salário</CourseTitle>
        </TitleBox>
      </Header>
      <ContentListContainer horizontal>
        {content.map((item, index) => (
          <Content key={index}>
            <ContentCover source={{uri: item.imageUrl}} />
            <ContentHeader>
              <ContentType>{item.contentType}</ContentType>
              <ContentType></ContentType>
            </ContentHeader>
            <ContentDescription>{item.description}</ContentDescription>
          </Content>
        ))}
      </ContentListContainer>
      <ProfessorContent>
        <ProfessorHeader>Especialista</ProfessorHeader>
        <ProfessorImage
          source={{
            uri:
              'https://extra.globo.com/incoming/24435757-4d5-4c3/w976h550-PROP/whatsapp-image-2020-05-19-at-13.48.51.jpeg.jpg',
          }}
        />
        <ProfessorName>Edson Tamares</ProfessorName>
      </ProfessorContent>
    </Container>
  );
}
