import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comment({ item, index }) {
  // console.log(item);
  const isEven = index % 2;

  return (
    <View style={{ flexDirection: isEven ? 'row-reverse' : 'row' }}>
      <View
        style={{ ...styles.imageBox, marginRight: isEven ? 0 : 16, marginLeft: isEven ? 16 : 0 }}
      >
        <Image />
      </View>
      <View
        style={{
          ...styles.commentBox,
          borderTopRightRadius: isEven ? 0 : 6,
          borderTopLeftRadius: isEven ? 6 : 0,
        }}
      >
        <Text style={styles.comment}>{item.data.comment}</Text>
        <Text style={{ ...styles.date, textAlign: isEven ? 'left' : 'right' }}>03.09.1992</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    height: 28,
    width: 28,
    backgroundColor: '#F6F6F6',
  },
  commentBox: {
    maxWidth: 300,
    marginBottom: 24,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  comment: {
    fontSize: 13,
    color: '#212121',
  },
  date: {
    marginTop: 8,
    fontSize: 10,
    color: '#BDBDBD',
  },
});
