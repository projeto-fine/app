import React, {useEffect, useState} from 'react';
import Card from '../../components/Card';
import {Heading, Container, CardList} from './style';
import {getPosts} from '../../services/feed';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Heading>Feed</Heading>
      <CardList>
        {posts.map((post) => {
          return (
            <Card
              name={post.user.name}
              title={post.user.title}
              description={post.content.text}
              userIcon={post.user.imageURL || null}
              image={post.content.imageURL || null}
              key={post._id}
            />
          );
        })}
      </CardList>
    </Container>
  );
};

export default Feed;
