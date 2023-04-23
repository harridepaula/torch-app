import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Camera } from 'expo-camera';

export default function TorchIntensity() {
  const [torchIntensity, setTorchIntensity] = useState(0);

  const handleSliderChange = (value) => {
    setTorchIntensity(value);
    Camera.setTorchIntensityAsync(value); // Set the torch intensity using the Expo Camera API
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Intensity:</Text>
      <Slider
        style={styles.slider}
        thumbTintColor="#f0f"
        minimumTrackTintColor="#EDC119"
        maximumTrackTintColor="black"
        value={torchIntensity}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
        onValueChange={handleSliderChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: '90%',
    height: 100,
    marginTop: 300,
  },
});yarn