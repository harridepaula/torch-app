import React from 'react';
import { View, Button } from 'react-native';

function MyComponent() {
  return (
    <View>
      <Button title="Hello World" onPress={() => console.log("Hello World")} />
    </View>
  );
}

export default MyComponent;

