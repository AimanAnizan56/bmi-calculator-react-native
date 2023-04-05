import { StatusBar } from 'expo-status-bar';
import { Platform, NativeModules, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import GenderSelect from './components/GenderSelect';
import { Details, Navbar } from './components';
import { COLOR_BLACK, COLOR_WHITE, COLOR_BLACK__DISABLED, COLOR_WHITE__DISABLED } from './color';

const { StatusBarManager } = NativeModules;

export default function App() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (height != undefined && weight != undefined && age != undefined) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  }, [height, weight, age]);

  return (
    <SafeAreaView style={styles.status_bar}>
      <StatusBar style="auto" />
      <Navbar />
      <GenderSelect gender={gender} setGender={setGender} />
      <Details textHeader="Height (in cm)" placeholder="0cm" currentState={height} setCurrentState={setHeight} />
      <Details textHeader="Weight (in kg)" placeholder="0kg" currentState={weight} setCurrentState={setWeight} />
      <Details textHeader="Age" placeholder="0yr" currentState={age} setCurrentState={setAge} />

      <Pressable style={[styles.button_calculate, buttonDisabled && styles.button_calculate__disabled]} disabled={buttonDisabled}>
        <Text style={[styles.button_calculate__text, buttonDisabled && styles.button_calculate__text_disabled]}>Calculate</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  status_bar: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  },
  button_calculate: {
    marginTop: 20,
    marginHorizontal: 40,
    backgroundColor: COLOR_BLACK,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  button_calculate__disabled: {
    backgroundColor: COLOR_BLACK__DISABLED,
  },
  button_calculate__text: {
    color: COLOR_WHITE,
    textAlign: 'center',
    fontSize: 16,
  },
  button_calculate__text_disabled: {
    color: COLOR_WHITE__DISABLED,
  },
});
