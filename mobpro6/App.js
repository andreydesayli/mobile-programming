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


// STATE & PROPS 

// -- STATE-- 
/*  State adalah data yang bersifat private yang berada pada component
    Datanya tidak bisa di akses oleh component lain
*/

class Counter extends React.Component {
  // #1 inisialisasi state
  state={
    value :0

    // inisialisasi state juga bisa menggunakan constructor
  }

  // #2 method untuk merubah state
    // minus
  minus=()=>{
    let currentValue=this.state.value // digunakan untuk membaca state
    this.setState({ value : currentValue -1 }) // digunakan untuk mengupdate state
  }

    // plus
  plus=()=>{
    let currentValue=this.state.value
    this.setState({ value : currentValue + 1})
  }

  // perubahan pada state di lakukan di dalam method render
  render(){
    // #3 read component state
    let currentValue=this.state.value

    // #4 call method
    this.plus () // plus
    console.log(currentValue)

    this.minus() // minus
    console.log(currentValue)
  }
}

// -- PROPS --

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
