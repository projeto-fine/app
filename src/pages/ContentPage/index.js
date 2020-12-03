import React, {useEffect} from 'react';
import {Container, Content, BannerImage, Title, Description} from './style';
import theme from '~/helpers/theme';

const Profile = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Primeiro Salário',
      headerTintColor: theme.mainColor,
      headerBackTitle: ' ',
    });
  }, []);

  return (
    <Container>
      <BannerImage
        source={{
          uri:
            'https://assets.blu365.com.br/uploads/sites/4/2020/05/dinheiro-carteira-de-trabalho-beneficio-emergencial.jpg',
        }}
      />
      <Content>
        <Title>Primeiramente, parabéns!</Title>
        <Description>
          Após trabalhar o mês todo e receber um bônus (salário) por esse
          esforço, se dê ao luxo de comprar algo que sempre quis e não
          conseguiu. Para alguns é comprar uma roupa nova, um tênis ou até pegar
          uma balada diferente, enfim, é importante comemorar essa nova fase da
          sua vida, mas, ATENÇÃO, não mantenha o mesmo padrão de consumo para os
          próximos meses e muito menos gaste mais do que ganhou, isso é
          importante para não se perder com suas finanças. Após trabalhar o mês
          todo e receber um bônus (salário) por esse esforço, se dê ao luxo de
          comprar algo que sempre quis e não conseguiu. Para alguns é comprar
          uma roupa nova, um tênis ou até pegar uma balada diferente, enfim, é
          importante comemorar essa nova fase da sua vida, mas, ATENÇÃO, não
          mantenha o mesmo padrão de consumo para os próximos meses e muito
          menos gaste mais do que ganhou, isso é importante para não se perder
          com suas finanças.
        </Description>
      </Content>
    </Container>
  );
};

export default Profile;
