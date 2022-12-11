import { View, Image, Text, StyleSheet } from 'react-native';

export default function Post({ item, navigation }) {
  return (
    <View style={styles.postContainer}>
      <Image style={styles.image} source={{ uri: item.photo }} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.credentialsBox}>
          <View style={styles.commentsBox}>
            <Image
              source={require('../../assets/Images/shape-post.png')}
              style={{ width: 18, height: 18 }}
            />
            <Text style={styles.comments} onPress={() => navigation.navigate('Comments')}>
              0
            </Text>
          </View>
          <View style={styles.locationBox}>
            <Image
              source={require('../../assets/Images/map-pin.png')}
              style={{ width: 16, height: 18 }}
            />
            <Text
              style={styles.location}
              onPress={() => navigation.navigate('Map', { location: item.location })}
            >
              {item.location}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  image: {
    height: 240,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  credentialsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },
  commentsBox: {
    flexDirection: 'row',
  },
  locationBox: {
    flexDirection: 'row',
  },
  comments: {
    marginLeft: 8,
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  location: {
    marginLeft: 8,
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
