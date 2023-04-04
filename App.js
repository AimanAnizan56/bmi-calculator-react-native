import { StatusBar } from 'expo-status-bar';
import { Platform, NativeModules, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import GenderSelect from './components/GenderSelect';
import Navbar from './components/Navbar';

const { StatusBarManager } = NativeModules;

export default function App() {
  const [gender, setGender] = useState('male');

  return (
    <SafeAreaView style={styles.status_bar}>
      <StatusBar style="auto" />
      <Navbar />
      <GenderSelect gender={gender} setGender={setGender} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  status_bar: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
});
