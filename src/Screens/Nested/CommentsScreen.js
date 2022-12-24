import { useState, useEffect } from 'react';
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
import {
  doc,
  updateDoc,
  arrayUnion,
  addDoc,
  collection,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import BtnBack from '../../Components/BtnBack';
import Comment from '../../Components/Comment';
import Header from '../../Components/Header';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../redux/auth/authSelectors';
import { db } from '../../firebase/config';

const initialComments = [
  {
    id: 1,
    comment: 'kill - kennThe borderRadius prop is used to give a curve from all the corners.',
  },
  { id: 2, comment: 'dont kill - kenny' },
  { id: 3, comment: 'The borderRadius prop is used to give a curve from all the corners.' },
  { id: 4, comment: 'Please don`t' },
];

export default function CommentsScreen({ navigation, route }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const userId = useSelector(selectUserId);

  async function addComment() {
    if (comment === '') {
      return;
    }

    await addDoc(collection(db, `posts/${route.params.postId}/comments`), { userId, comment });
    // setComments(prevState => [...prevState, { id, comment }]);
    setComment('');
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  useEffect(() => {
    (async () => {
      const fetchComments = await getDocs(collection(db, `posts/${route.params.postId}/comments`));

      fetchComments.forEach(doc => {
        setComments(prevState => [...prevState, { postId: doc.id, data: doc.data() }]);
      });
    })();
  }, []);

  return (
    <TouchableWithoutFeedback disabled={!isShowKeyboard} onPress={() => setIsShowKeyboard(false)}>
      <View style={styles.container}>
        <Header title={'Комментарии'}>
          <BtnBack navigation={navigation} />
        </Header>
        <View style={{ backgroundColor: '#FFFFFF', flex: 7 }}>
          {!isShowKeyboard && (
            <View>
              <Image style={styles.image} source={{ uri: route.params.imageUrl }} />
            </View>
          )}

          {comments.length !== 0 && (
            <FlatList
              style={styles.commentsContainer}
              data={comments}
              renderItem={({ item, index }) => <Comment item={item} index={index} />}
              keyExtractor={item => item.postId}
            />
          )}
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.footer}
        >
          {/* <View> */}
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
          {/* </View> */}
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
