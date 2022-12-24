import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function BtnBack({ navigation }) {
  function goBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <TouchableOpacity style={styles.backBtn} onPress={goBack}>
      <Image
        source={require('../../assets/Images/arrow-left.png')}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    left: 20,
    bottom: 11,
  },
});
