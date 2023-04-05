import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpinner as faSpinner } from '@fortawesome/free-solid-svg-icons';
import { COLOR_GRAY } from '../color';

const SplashScreen = () => {
  return (
    <>
      <View style={container}>
        <View style={content}>
          <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} />
          <Text style={[text_center, mt, font_16]}>BMI Calculator by Aiman Anizan</Text>
        </View>
      </View>
    </>
  );
};

const { container, content, text_center, mt, font_16 } = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_center: {
    textAlign: 'center',
  },
  mt: {
    marginTop: 40,
  },
  font_16: {
    fontSize: 16,
  },
});

export default SplashScreen;
