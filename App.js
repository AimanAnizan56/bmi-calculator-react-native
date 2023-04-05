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
  const [BMI, setBMI] = useState();
  const [conclusion, setConclusion] = useState();

  useEffect(() => {
    setBMI();
    if (height != undefined && weight != undefined && age != undefined) {
      setButtonDisabled(false);
      return;
    }
    setButtonDisabled(true);
  }, [height, weight, age, gender]);

  const calculateBMI = () => {
    // Convert height to meters
    metre = height / 100;

    // Calculate BMI
    let _bmi = weight / (metre * metre);

    // Adjust BMI based on gender and age
    if (gender === 'male') {
      _bmi += 0.5 * age - 5.4;
    } else {
      _bmi += 0.1 * age + 8.4;
    }

    _bmi = _bmi.toFixed(2);
    setBMI(_bmi);

    if (_bmi < 18.5) {
      setConclusion('Underweight');
    } else if (_bmi >= 18.5 && _bmi <= 24.9) {
      setConclusion('Healthy Weight.');
    } else if (_bmi >= 25 && _bmi <= 29.9) {
      setConclusion('Overweight.');
    } else {
      setConclusion('Obese.');
    }
  };

  return (
    <SafeAreaView style={styles.status_bar}>
      <StatusBar style="auto" />
      <Navbar />
      <GenderSelect gender={gender} setGender={setGender} />
      <Details textHeader="Height (in cm)" placeholder="0cm" currentState={height} setCurrentState={setHeight} />
      <Details textHeader="Weight (in kg)" placeholder="0kg" currentState={weight} setCurrentState={setWeight} />
      <Details textHeader="Age" placeholder="0yr" currentState={age} setCurrentState={setAge} />

      <Pressable style={[styles.button_calculate, buttonDisabled && styles.button_calculate__disabled]} disabled={buttonDisabled} onPress={calculateBMI}>
        <Text style={[styles.button_calculate__text, buttonDisabled && styles.button_calculate__text_disabled]}>Calculate</Text>
      </Pressable>

      {BMI && (
        <>
          <View style={styles.BMI_view}>
            <Text style={styles.BMI_view__text}>{BMI}kg/m</Text>
            <Text style={styles.BMI_view__superscript}>2</Text>
          </View>
          <View style={{ ...styles.BMI_view, marginTop: 0 }}>
            <Text style={styles.BMI_view__con}>{conclusion}</Text>
          </View>
        </>
      )}
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
  BMI_view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
  },
  BMI_view__text: {
    fontSize: 16,
  },
  BMI_view__superscript: { fontSize: 12, lineHeight: 15 },
  BMI_view__con: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
