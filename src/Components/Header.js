import { StyleSheet, View, Text } from 'react-native';

export default function Header({ title, children }) {

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    maxHeight: 88,
    paddingTop: 55,
    backgroundColor: '#FFFFFF',
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 0.5,
  },
  title: {
    textAlign: 'center',
    color: '#212121',
    fontSize: 16,
    marginBottom: 11,
    fontFamily: 'Roboto-Medium',
  },
});
