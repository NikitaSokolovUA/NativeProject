import { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Camera, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function CreatePhotoForm({ photo, setPhotoInfo }) {
  const [hasPermision, setHasPermision] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  // function to take Photo
  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);

      setPhotoInfo(prevState => ({ ...prevState, photo: uri }));
    }
  };

  // request for permission Camera && Media
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermision(status === 'granted');
    })();
  }, []);

  if (hasPermision === null) {
    return (
      <View style={styles.loadedImg}>
        <TouchableOpacity style={styles.addPhotoBtn}>
          <Image source={require('../../assets/Images/camera.png')} />
        </TouchableOpacity>
      </View>
    );
  }

  // if no request for camera
  if (hasPermision === false) {
    return (
      <View style={styles.loadedImg}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.loadedImg}>
        <Camera
          flashMode={FlashMode.auto}
          type={Camera.Constants.Type.back}
          style={styles.camera}
          ref={ref => {
            setCameraRef(ref);
          }}
        >
          {/* {photo && (
            <View style={styles.photoContainer}>
              <Image source={{ uri: photo }} style={{ width: 100, height: 50 }} />
            </View>
          )} */}
          <TouchableOpacity style={styles.addPhotoBtn} onPress={takePhoto}>
            <Image source={require('../../assets/Images/camera.png')} />
          </TouchableOpacity>
        </Camera>
      </View>
      <Text style={styles.description}>{photo ? 'Редактировать фото' : 'Загрузите фото'}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  loadedImg: {
    backgroundColor: '#F6F6F6',
    height: 240,
    marginTop: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  camera: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  addPhotoBtn: {
    height: 60,
    width: 60,
  },
  description: {
    marginTop: 8,
    marginLeft: 16,
    color: '#BDBDBD',
  },
  photoContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    top: 5,
    left: 5,
  },
});
