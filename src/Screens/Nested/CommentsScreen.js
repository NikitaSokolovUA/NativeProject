import { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import Comment from '../../Components/Comment';
import Header from '../../Components/Header';

const initialComments = [
  {
    id: 1,
    comment: 'kill - kennThe borderRadius prop is used to give a curve from all the corners.',
  },
  { id: 2, comment: 'dont kill - kenny' },
  { id: 3, comment: 'The borderRadius prop is used to give a curve from all the corners.' },
  { id: 4, comment: 'Please don`t' },
];

export default function CommentsScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState('');

  function addComment() {
    const id = Math.random();

    if (comment === '') {
      return;
    }

    setComments(prevState => [...prevState, { id, comment }]);
    setComment('');
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  function goBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Header title={'Комментарии'}>
          <TouchableOpacity style={styles.backBtn} onPress={goBack}>
            <Image source={require('../../../assets/Images/arrow-left.png')} />
          </TouchableOpacity>
        </Header>
        <View style={{ backgroundColor: '#FFFFFF', flex: 7 }}>
          {!isShowKeyboard && (
            <View style={styles.image}>
              <Image />
            </View>
          )}

          {comments && (
            <FlatList
              style={styles.commentsContainer}
              data={comments}
              renderItem={({ item, index }) => <Comment item={item} index={index} />}
              keyExtractor={item => item.id}
            />
          )}
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.footer}
        >
          <View>
            <View style={styles.addCommentBox}>
              <TextInput
                value={comment}
                onChangeText={text => setComment(text)}
                placeholder="Комментировать..."
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TouchableOpacity style={styles.addCommentBtn} onPress={addComment}>
                <Image
                  style={styles.addCommentBtn}
                  source={require('../../../assets/Images/Send.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backBtn: {
    position: 'absolute',
    left: 20,
    bottom: 11,
  },
  image: {
    marginTop: 32,
    height: 240,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  footer: {
    flex: 1,
    maxHeight: 82,
    marginBottom: 0,
  },
  commentsContainer: {
    marginTop: 32,
    marginHorizontal: 16,
    marginBottom: 30,
  },
  addCommentBox: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  addCommentBtn: {
    height: 34,
    width: 34,
  },
});
