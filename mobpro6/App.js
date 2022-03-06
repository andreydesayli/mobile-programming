// Import Hello.js as the function component to show the Group member's names.
import Hello from './Hello';
import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 60}}>Group 1</Text>
      <Text style={{fontSize: 40}}>Exercise 6</Text>
      <Hello />
      <Chat props={'This is props'} />
    </View>
  );
};

// coba buat child class. props ada di class child ini 
// props akan diakses di App
export function Chat({props}) {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'purple', alignSelf: 'center'}}>
        {props}
      </Text>
    </View>
  );
}
//// properti ini adalah data yang bisa diakses di komponen lain (properties components)
export default App;
