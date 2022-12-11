import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';

const initialState = {
  email: '',
  password: '',
};

const initialStateFocus = {
  email: false,
  password: false,
};

export default function LoginScreen({ navigation }) {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(initialStateFocus);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    if (state.email === '' || state.password === '') {
      return;
    }
    console.log(state);
    Keyboard.dismiss();
    setState(initialState);
    setIsShowKeyboard(false);
    navigation.navigate('Home');
  };

  const onFocusTextInput = key => {
    setIsShowKeyboard(true);
    setIsFocused(prevState => ({ ...prevState, [key]: true }));
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/Images/bg_photo.jpg')}
          style={styles.image}
        >
          <View style={styles.form}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              <View>
                <Text style={styles.title}>Войти</Text>
                <View style={{ ...styles.inputForm, marginTop: 33 }}>
                  <TextInput
                    placeholder="Адрес электронной почты"
                    style={{
                      ...styles.input,
                      borderColor: isFocused.email ? '#FF6C00' : '#E8E8E8',
                    }}
                    value={state.email}
                    onFocus={() => onFocusTextInput('email')}
                    onBlur={() => setIsFocused(initialStateFocus)}
                    onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                  />
                </View>
                <View
                  style={{
                    ...styles.inputForm,
                    marginBottom: isShowKeyboard ? 32 : 0,
                  }}
                >
                  <TextInput
                    placeholder="Пароль"
                    style={{
                      ...styles.input,
                      borderColor: isFocused.password ? '#FF6C00' : '#E8E8E8',
                    }}
                    secureTextEntry={isShowPassword}
                    value={state.password}
                    onFocus={() => onFocusTextInput('password')}
                    onBlur={() => setIsFocused(initialStateFocus)}
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <Text
                    style={styles.showPasswordText}
                    onPress={() => setIsShowPassword(prevState => !prevState)}
                  >
                    Показать
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
            {!isShowKeyboard && (
              <>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                  <Text style={styles.buttonTitle}>Войти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.navigation}
                  onPress={() => navigation.navigate('Registration')}
                >
                  <Text style={styles.navigationText}>Нет аккаунта? Зарегистрироваться</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
  },
  inputForm: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    height: 50,
    paddingLeft: 16,
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
  },
  showPasswordText: {
    position: 'absolute',
    right: 16,
    top: 15,
    fontFamily: 'Roboto-Regular',
    color: '#1B4371',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    marginTop: 59,
    marginHorizontal: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
  buttonTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  navigation: {
    marginTop: 16,
    marginBottom: 75,
  },
  navigationText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    color: '#1B4371',
  },
});
