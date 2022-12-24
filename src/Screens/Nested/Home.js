import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header';
import Post from '../../Components/Post';
import { authSignOut } from '../../redux/auth/authOperations';
import { selectUserEmail, selectUserId, selectUserNickname } from '../../redux/auth/authSelectors';
import { fetchPosts } from '../../redux/dashboard/dashboardOperations';
import { selectPostsItems } from '../../redux/dashboard/dashboardSelectors';

// const initialGallery = [
//   { photo: '../../assets/splash.png', title: 'In the forest', location: 'Irpin' },
//   { photo: '../../assets/splash.png', title: 'In the forest', location: 'Ukraine/Kiev' },
//   //   { id: 3, title: 'Big kiss', likes: 35000, comments: 4, location: 'England' },
// ];

export default function Home({ navigation, route }) {
  const dispatch = useDispatch();
  // const [posts, setPosts] = useState([...initialGallery]);

  const posts = useSelector(selectPostsItems);

  const userId = useSelector(selectUserId);
  const email = useSelector(selectUserEmail);
  const nickname = useSelector(selectUserNickname);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <View style={styles.container}>
      <Header title={'Публикации'}>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => dispatch(authSignOut())}>
          <Image source={require('../../../assets/Images/log-out.png')} />
        </TouchableOpacity>
      </Header>
      <View style={styles.publication}>
        <View style={styles.user}>
          <Image style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{nickname}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
        </View>
        {posts.length !== 0 && (
          <FlatList
            style={styles.list}
            data={posts}
            keyExtractor={item => item.postId}
            renderItem={({ item }) => <Post item={item} navigation={navigation} />}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoutBtn: {
    position: 'absolute',
    bottom: 11,
    right: 15,
  },
  publication: {
    flex: 2,
    marginHorizontal: 16,
  },
  user: {
    flexDirection: 'row',
    marginTop: 32,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: 'grey',
  },
  userInfo: {
    justifyContent: 'center',
  },
  name: {
    color: '#212121',
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  email: {
    color: 'rgba(33, 33, 33, 0.8)',
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },
  list: {
    marginTop: 10,
  },
});
