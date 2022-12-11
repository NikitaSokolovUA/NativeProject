import { Image, Text, View, StyleSheet } from 'react-native';

export default function GalleryItem({ item }) {
  return (
    <View style={styles.galleryContainer}>
      <Image style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.credentialsBox}>
        <View style={styles.statisticBox}>
          <View style={{ ...styles.statisticBox, marginLeft: 3 }}>
            <Image style={styles.icons} source={require('../../assets/Images/Shape.png')} />
            <Text style={styles.statisticText}>{item.comments}</Text>
          </View>
          <View style={{ ...styles.statisticBox, marginLeft: 27 }}>
            <Image style={styles.icons} source={require('../../assets/Images/thumbs-up.png')} />
            <Text style={styles.statisticText}>{item.likes}</Text>
          </View>
        </View>
        <View style={styles.statisticBox}>
          <Image
            source={require('../../assets/Images/map-pin.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
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
