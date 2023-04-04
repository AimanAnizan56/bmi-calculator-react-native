import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BMI Calculator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
