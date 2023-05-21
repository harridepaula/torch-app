import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useKeenSliderNative } from "keen-slider/react-native";

function Slider() {
  const slides = 4;
  const slider = useKeenSliderNative({
    slides,
  });

  return (
    <View {...slider.containerProps}>
      {[...Array(slides).keys()].map((idx) => {
        return (
          <View key={idx} {...slider.slidesProps[idx]} style={styles.slider}>
            <Text>Slide {idx}</Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  slider: {
    width: "90%",
    height: 100,
  },
});

export default Slider;
