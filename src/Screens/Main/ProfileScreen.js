import { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GalleryItem from '../../Components/GalleryItem';
import { useProfilePost } from '../../hooks/useProfilePosts';
import { authSignOut } from '../../redux/auth/authOperations';
import { selectUserId, selectUserNickname } from '../../redux/auth/authSelectors';
import { selectPostsItems } from '../../redux/dashboard/dashboardSelectors';

export default function ProfileScreen({ navigation }) {
  const username = useSelector(selectUserNickname);
  const dispatch = useDispatch();
  const [gallery, setGallery] = useState(
    useProfilePost(useSelector(selectPostsItems), useSelector(selectUserId)) || []
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Images/bg_photo.jpg')} style={styles.image}>
        <View style={{ flex: 2 }}></View>
        <View style={styles.form}>
          {gallery.length !== 0 ? (
            <FlatList
              data={gallery}
              renderItem={({ item, index }) => (
                <>
                  {index === 0 && (
                    <>
                      <TouchableOpacity
                        style={styles.backBtn}
                        onPress={() => dispatch(authSignOut())}
                      >
                        <Image source={require('../../../assets/Images/log-out.png')} />
                      </TouchableOpacity>
                      <Text style={styles.title}>{username}</Text>
                    </>
                  )}
                  <GalleryItem item={item} navigation={navigation} />
                </>
              )}
              keyExtractor={item => item.postId}
            />
          ) : (
            <>
              <TouchableOpacity style={styles.backBtn} onPress={() => dispatch(authSignOut())}>
                <Image source={require('../../../assets/Images/log-out.png')} />
              </TouchableOpacity>
              <Text style={styles.title}>{username}</Text>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backBtn: {
    position: 'absolute',
    right: 16,
    top: 22,
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 92,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
  },
});
