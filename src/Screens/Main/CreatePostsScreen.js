import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from '../../Components/Header';
import CreatePhotoForm from '../../Components/CreatePhotoForm';
import { ref, uploadBytes, getDownloadURL, set } from 'firebase/storage';
import { db, storage } from '../../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../redux/auth/authSelectors';
import { collection, addDoc } from 'firebase/firestore';
import { createPost } from '../../redux/dashboard/dashboardOperations';
import BtnBack from '../../Components/BtnBack';

const initialPhotoInfo = {
  photo: '',
  title: '',
  location: '',
};

export default function CreatePostsScreen({ navigation }) {
  const [photoInfo, setPhotoInfo] = useState(initialPhotoInfo);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    const { photo, title, location } = photoInfo;

    if (photo !== '' && title !== '' && location !== '') {
      setIsBtnDisabled(false);
    }

    return () => setIsBtnDisabled(true);
  }, [photoInfo]);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  function addPost() {
    navigation.navigate('Posts', { photoInfo });

    uploadPhotoOnServer();
    setPhotoInfo(initialPhotoInfo);
    keyboardHide();
  }

  const uploadPhotoOnServer = async () => {
    const responce = await fetch(photoInfo.photo);
    const file = await responce.blob();
    const unic = Date.now();

    const storageRef = ref(storage, `photo/${unic}`);

    const data = await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);

    dispatch(
      createPost({ title: photoInfo.title, location: photoInfo.location, imageUrl, userId })
    );
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Header title={'Создать публикацию'}>
          <BtnBack navigation={navigation} />
        </Header>

        <View style={styles.createSection}>
          {!isShowKeyboard && (
            <CreatePhotoForm photo={photoInfo.photo} setPhotoInfo={setPhotoInfo} />
          )}
          <View style={{ ...styles.inputForm, marginTop: 48 }}>
            <TextInput
              onFocus={() => setIsShowKeyboard(true)}
              value={photoInfo.title}
              onChangeText={text => setPhotoInfo(prevState => ({ ...prevState, title: text }))}
              placeholder="Название..."
            />
          </View>
          <View style={{ ...styles.inputForm, marginTop: 32, flexDirection: 'row' }}>
            <Image
              source={require('../../../assets/Images/map-pin.png')}
              style={{ width: 18, height: 18 }}
            />
            <TextInput
              onFocus={() => setIsShowKeyboard(true)}
              style={styles.input}
              value={photoInfo.location}
              onChangeText={text => setPhotoInfo(prevState => ({ ...prevState, location: text }))}
              placeholder="Местность..."
            />
          </View>
          <TouchableOpacity
            disabled={isBtnDisabled}
            onPress={addPost}
            style={{
              ...styles.submitBtn,
              backgroundColor: isBtnDisabled ? '#F6F6F6' : '#FF6C00',
            }}
          >
            <Text style={{ color: isBtnDisabled ? '#BDBDBD' : '#FFFFFF' }}>Опубликовать</Text>
          </TouchableOpacity>
          <View style={styles.deleteBtnBox}>
            <TouchableOpacity>
              <Image source={require('../../../assets/Images/trash.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtn: {
    position: 'absolute',
    left: 20,
    bottom: 11,
  },
  createSection: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    border: 1,
    borderColor: 'tomato',
  },
  inputForm: {
    marginHorizontal: 16,
    paddingBottom: 15,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  input: {
    marginLeft: 8,
  },
  submitBtn: {
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 16,
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
  deleteBtnBox: {
    position: 'absolute',
    bottom: 16,
    alignItems: 'center',
    width: '100%',
  },
});
