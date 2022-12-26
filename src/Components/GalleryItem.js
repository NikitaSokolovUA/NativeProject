import { collection, getCountFromServer } from 'firebase/firestore';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

export default function GalleryItem({ item, navigation }) {
  const [comments, setComments] = useState();

  useEffect(() => {
    (async () => {
      try {
        const responce = await getCountFromServer(collection(db, `posts/${item.postId}/comments`));
        const count = await responce.data().count;

        setComments(count);
      } catch (e) {
        console.log(e.message);
      }
    })();
  }, []);

  return (
    <View style={styles.galleryContainer}>
      <Image style={styles.image} source={{ uri: item.data.imageUrl }} />
      <Text style={styles.title}>{item.data.title}</Text>
      <View style={styles.credentialsBox}>
        <View style={styles.statisticBox}>
          <TouchableOpacity
            style={{ ...styles.statisticBox, marginLeft: 3 }}
            onPress={() =>
              navigation.navigate('Comments', { postId: item.postId, imageUrl: item.data.imageUrl })
            }
          >
            <Image style={styles.icons} source={require('../../assets/Images/Shape.png')} />
            <Text style={styles.statisticText}>{comments || 0}</Text>
          </TouchableOpacity>
          <View style={{ ...styles.statisticBox, marginLeft: 27 }}>
            <Image style={styles.icons} source={require('../../assets/Images/thumbs-up.png')} />
            <Text style={styles.statisticText}>{item.likes || 0}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.statisticBox}
          onPress={() => navigation.navigate('Map', { location: item.data.location })}
        >
          <Image
            source={require('../../assets/Images/map-pin.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.locationText}>{item.data.location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  galleryContainer: {
    marginTop: 33,
    marginHorizontal: 16,
  },
  image: {
    height: 240,
    borderRadius: 8,
    backgroundColor: 'grey',
  },
  title: {
    marginTop: 8,
    color: '#212121',
    fontSize: 16,
  },
  credentialsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },
  statisticBox: {
    flexDirection: 'row',
  },
  icons: {
    height: 24,
    width: 24,
  },
  statisticText: {
    marginLeft: 10,
    color: '#212121',
    fontSize: 16,
  },
  locationText: {
    marginLeft: 16,
    color: '#212121',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
