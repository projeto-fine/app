import React, {useEffect, useState} from 'react';
import Card from './components/Card';
import {Heading, Container, CardList, View, Loading} from './style';
import {RefreshControl} from 'react-native';
import {getPosts, getLatestPosts} from '~/services/feed';
import {getUserId} from '~/helpers/utils';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [userId, setUserId] = useState(false);

  const fetchPosts = async () => {
    const res = await getPosts(nextPage);
    setPosts((prev) => {
      return [...prev, ...res.posts];
    });
    setLoading(false);
    setNextPage(res.nextPage);
  };

  const getUserInfo = async () => {
    const userId = await getUserId();
    setUserId(userId);
  };

  useEffect(() => {
    setLoading(true);
    getUserInfo();
    fetchPosts();
  }, []);

  const renderCards = ({item}) => {
    return (
      <Card
        id={item._id}
        name={item.user.name}
        title={item.user.title}
        description={item.content.text}
        userIcon={item.user.imageURL || null}
        image={item.content.imageURL || null}
        isSaved={item.saves?.includes(userId)}
        isLiked={item.likes?.includes(userId)}
      />
    );
  };

  const onRefresh = async () => {
    setRefreshing(true);
    const res = await getLatestPosts(posts[0]?.creationDate);
    if (res.length > 0) {
      setPosts(res.concat(posts));
    }
    setRefreshing(false);
  };

  return (
    <Container>
      <Heading>Feed</Heading>
      <View>
        {loading ? (
          <Loading />
        ) : (
          <CardList
            data={posts}
            keyExtractor={(item) => item._id}
            renderItem={renderCards}
            onEndReached={() => fetchPosts()}
            onEndReachedThreshold={0.05}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </Container>
  );
};

export default Feed;
