import React from 'react';
import Card from '../../components/Card';
import {Heading, Container, CardList} from './style';

const Feed = () => {
  return (
    <Container>
      <Heading>Feed</Heading>
      <CardList>
        <Card
          title="Bruno Gagliasso"
          subtitle="Economista"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
        <Card
          title="Bruno Gagliasso"
          subtitle="Economista"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
        <Card
          title="Bruno Gagliasso"
          subtitle="Economista"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
        <Card
          title="Bruno Gagliasso"
          subtitle="Economista"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
        <Card
          title="Bruno Gagliasso"
          subtitle="Economista"
          description="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
      </CardList>
    </Container>
  );
};

export default Feed;
