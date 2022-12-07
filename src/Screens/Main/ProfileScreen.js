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
import GalleryItem from '../../Components/GalleryItem';

const initialGallery = [
  { id: 1, title: 'In the forest', likes: 10, comments: 4, location: 'Ukraine' },
  { id: 2, title: 'In the forest', likes: 345, comments: 31231, location: 'Ukraine/Kiev' },
  //   { id: 3, title: 'Big kiss', likes: 35000, comments: 4, location: 'England' },
];

export default function ProfileScreen() {
  const [gallery, setGallery] = useState(initialGallery);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Images/bg_photo.jpg')} style={styles.image}>
        <View style={{ flex: 2 }}></View>
        <View style={styles.form}>
          <TouchableOpacity style={styles.backBtn}>
            <Image source={require('../../../assets/Images/log-out.png')} />
          </TouchableOpacity>
          {gallery && (
            <FlatList
              data={gallery}
              renderItem={({ item, index }) => (
                <>
                  {index === 0 && <Text style={styles.title}>Sokolov Mykyta</Text>}
                  <GalleryItem item={item} title={'Sokolov Mykyta'} />
                </>
              )}
              keyExtractor={item => item.id}
            />
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
