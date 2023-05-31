import * as React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';

export default function App() {
  const {width, height} = useWindowDimensions();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
}
