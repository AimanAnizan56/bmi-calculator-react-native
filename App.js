import { StatusBar } from 'expo-status-bar';
import { Platform, NativeModules, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';

const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <SafeAreaView style={styles.status_bar}>
      <StatusBar style="auto" />
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  status_bar: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
});
