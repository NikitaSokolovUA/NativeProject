import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../Components/Header';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Header title={'Публикации'}>
        <TouchableOpacity style={styles.logoutBtn}>
          <Image source={require('../../../assets/Images/log-out.png')} />
        </TouchableOpacity>
      </Header>
      <View style={styles.publication}>
        <View style={styles.user}>
          <Image style={styles.avatar} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Sokolov Mykyta</Text>
            <Text style={styles.email}>aaa@gmail.com</Text>
          </View>
        </View>
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
});
