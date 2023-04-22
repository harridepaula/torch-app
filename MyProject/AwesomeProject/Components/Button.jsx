import React from 'react';
import { View, Button } from 'react-native';
import Torch from 'react-native-torch';

function MyButton() {
  return (
    <View>
      <Button title="Hello World" onPress={() => Torch.switchState(true)} />
    </View>
  );
}

export default MyButton;
