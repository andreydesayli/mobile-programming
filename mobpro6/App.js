import React from 'react';
import Hello from './Hello';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize:60}}>Group 1</Text>
      <Text style={{fontSize:40}}>Exercise 6</Text>
      <Hello/>
    </View>
  );
};

export default App;