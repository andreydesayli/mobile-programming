import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  text1: {
    color: 'blue',
  }
});
const Hello = () => {
  const name1 = 'Andrey Desayli';
  const name2 = 'Suvin Raj';
  return (
    <View>

      <Text style={styles.text1}>Hello, I am {name1}!</Text>
      <Text style={styles.text1}>Hello, I am {name2}!</Text>
      <Text style={styles.text1}>Hello, I am Angel Jeannete!</Text>
      <Text style={styles.text1}>Hello, I am Elshadai Rampengan!</Text>
      <Text style={styles.text1}>Hello, I am Venny Tewu!</Text>
      <Text style={styles.text1}>Hello, I am Itou Billy Liando!</Text>
    </View>
  );
};

export default Hello;
