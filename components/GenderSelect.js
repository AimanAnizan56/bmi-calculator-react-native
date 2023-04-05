import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMars as faMars, faVenus as faVenus } from '@fortawesome/free-solid-svg-icons';
import { COLOR_BLACK, COLOR_GRAY, COLOR_ORANGE, COLOR_PINK } from '../color';

export default function GenderSelect({ gender, setGender }) {
  return (
    <View style={styles.container}>
      <View style={styles.container_child}>
        <Button currentGender="male" gender={gender} setGender={setGender} />
      </View>
      <View style={styles.container_child}>
        <Button currentGender="female" gender={gender} setGender={setGender} />
      </View>
    </View>
  );
}

function Button({ currentGender, gender, setGender }) {
  const selectGender = () => {
    setGender(currentGender);
  };

  return (
    <Pressable style={gender == currentGender ? { ...styles.button, ...styles.button__selected } : { ...styles.button }} onPress={selectGender}>
      <View style={styles.button__content}>
        <FontAwesomeIcon icon={currentGender == 'male' ? faMars : faVenus} size={60} style={currentGender == 'male' ? styles.icon__male : styles.icon__female} />
        <Text style={styles.text_regular}>{currentGender}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  container_child: {
    height: 140,
    width: 140,
  },
  text_regular: {
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: COLOR_GRAY,
  },
  button__selected: {
    borderColor: COLOR_BLACK,
  },
  button__content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  icon__male: {
    color: COLOR_ORANGE,
  },
  icon__female: {
    color: COLOR_PINK,
  },
});
