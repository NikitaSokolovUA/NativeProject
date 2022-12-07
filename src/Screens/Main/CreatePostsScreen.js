import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Header from '../../Components/Header';

const initialValues = { title: '', location: '' };

export default function CreatePostsScreen() {
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Header title={'Создать публикацию'}>
          <TouchableOpacity style={styles.backBtn}>
            <Image source={require('../../../assets/Images/arrow-left.png')} />
          </TouchableOpacity>
        </Header>

        <View style={styles.createSection}>
          {!isShowKeyboard && (
            <View style={styles.loadedImg}>
              <TouchableOpacity style={styles.addPhotoBtn}>
                <Image source={require('../../../assets/Images/camera.png')} />
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.description}>
            {isPhotoLoaded ? 'Редактировать фото' : 'Загрузите фото'}
          </Text>
          <View style={{ ...styles.inputForm, marginTop: 48 }}>
            <TextInput onFocus={() => setIsShowKeyboard(true)} placeholder="Название..." />
          </View>
          <View style={{ ...styles.inputForm, marginTop: 32, flexDirection: 'row' }}>
            <Image source={require('../../../assets/Images/map-pin.png')} />
            <TextInput
              onFocus={() => setIsShowKeyboard(true)}
              style={styles.input}
              placeholder="Местность..."
            />
          </View>
          <TouchableOpacity
            disabled={isSubmitBtnDisabled}
            style={{
              ...styles.submitBtn,
              backgroundColor: isSubmitBtnDisabled ? '#F6F6F6' : '#FF6C00',
            }}
          >
            <Text style={{ color: isSubmitBtnDisabled ? '#BDBDBD' : '#FFFFFF' }}>Опубликовать</Text>
          </TouchableOpacity>
          {/* <View style={styles.deleteBtnBox}>
          <TouchableOpacity>
          <Image source={require('../../../assets/Images/trash.png')} />
          </TouchableOpacity>
        </View> */}
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
  loadedImg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    height: 240,
    marginTop: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
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
