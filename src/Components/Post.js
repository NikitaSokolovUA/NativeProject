import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Post({ item, navigation }) {
  return (
    <View style={styles.postContainer}>
      <Image style={styles.image} source={{ uri: item.data.imageUrl }} />
      <View>
        <Text style={styles.title}>{item.data.title}</Text>
        <View style={styles.credentialsBox}>
          <TouchableOpacity
            style={styles.commentsBox}
            onPress={() =>
              navigation.navigate('Comments', { postId: item.postId, imageUrl: item.data.imageUrl })
            }
          >
            <Image
              source={require('../../assets/Images/shape-post.png')}
              style={{ width: 18, height: 18 }}
            />
            <Text style={styles.comments}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.locationBox}
            onPress={() => navigation.navigate('Map', { location: item.data.location })}
          >
            <Image
              source={require('../../assets/Images/map-pin.png')}
              style={{ width: 16, height: 18 }}
            />
            <Text style={styles.location}>{item.data.location}</Text>
          </TouchableOpacity>
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
