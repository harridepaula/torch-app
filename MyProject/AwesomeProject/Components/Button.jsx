import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Torch from "react-native-torch";

function MyButton() {
  const [isOn, setIsOn] = useState(false);

  const handlePress = () => {
    setIsOn(!isOn);
    Torch.switchState(!isOn);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.button,
          { backgroundColor: isOn ? "#112240" : "orange" },
        ]}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name={isOn ? "power" : "power-off"}
            size={36}
            color="#fff"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight + 350 || 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "orange",
    width: 100,
    height: 100,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyButton;
