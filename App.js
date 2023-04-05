import { StatusBar } from 'expo-status-bar';
import { Platform, NativeModules, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import GenderSelect from './components/GenderSelect';
import { Details, Navbar } from './components';

const { StatusBarManager } = NativeModules;

export default function App() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();

  return (
    <SafeAreaView style={styles.status_bar}>
      <StatusBar style="auto" />
      <Navbar />
      <GenderSelect gender={gender} setGender={setGender} />
      <Details textHeader="Height (in cm)" placeholder="0cm" currentState={height} setCurrentState={setHeight} />
      <Details textHeader="Weight (in kg)" placeholder="0kg" currentState={weight} setCurrentState={setWeight} />
      <Details textHeader="Age" placeholder="0yr" currentState={age} setCurrentState={setAge} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  status_bar: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
});
