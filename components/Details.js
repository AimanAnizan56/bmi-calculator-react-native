import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLOR_GRAY } from '../color';

export default function Details({ textHeader, placeholder, currentState, setCurrentState }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{textHeader}</Text>
        <View style={styles.center}>
          <TextInput style={styles.text__input} keyboardType="numeric" placeholder={placeholder} value={currentState} onChangeText={setCurrentState} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  box: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: COLOR_GRAY,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__input: {
    marginTop: 10,
    textAlign: 'center',
    marginHorizontal: 4,
    fontSize: 20,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderColor: COLOR_GRAY,
    width: 50,
  },
});
