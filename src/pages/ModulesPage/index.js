import React, {useEffect} from 'react';
import ProgressBar from '~/components/ProgressBar/index';
import theme from '~/helpers/theme';
import ChevronRight from '../../assets/images/chevron_right_24px.png';
import {
  Container,
  Header,
  Heading,
  Image,
  Module,
  ModuleCard,
  ModuleContent,
  ModuleList,
  ModuleNumber,
  ModuleTitle,
} from './style';

export default function ModulesPage({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      title: 'Educação Financeira',
      headerTintColor: theme.mainColor,
      headerBackTitle: ' ',
    });
  }, []);

  return (
    <Container>
      <Header>
        <Heading>Educação Financeira</Heading>
        <Module>1 de 4 concluídos</Module>
      </Header>
      <ModuleList>
        {[1, 2, 3, 4, 5].map((module, index) => (
          <ModuleCard
            key={index}
            onPress={() => navigation.navigate('ContentList')}>
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
