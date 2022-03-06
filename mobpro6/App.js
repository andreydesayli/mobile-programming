// Import Hello.js as the function component to show the Group member's names.
import Hello from './Hello';
import {View, Text} from 'react-native';
import React from 'react';
// Import HomeStyle.js
import styles from './HomeStyle';

const App = () => {
  return (
    <View>
      <Text style={styles.text1}>Group 1</Text>
      <Text style={styles.text2}>Exercise 6</Text>
      <View style={styles.borderBox}></View>
      <Hello/>
      <Chat props={'This is props'} />
    </View>
  );
};

// coba buat child class. props ada di class child ini 
// props akan diakses di App
export function Chat({props}) {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'purple', alignSelf: 'center'} /*Contoh styling secara langsung*/}>
        {props}
      </Text>
    </View>
  );
}
//// properti ini adalah data yang bisa diakses di komponen lain (properties components)
export default App;
