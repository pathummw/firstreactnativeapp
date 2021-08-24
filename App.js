import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  /* const [input, setInput] = useState(0);

  const clickHandler = () => {
    setInput(input + 2);
  } */

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <TextInput style={styles.input}
          placeholder='e.g. Pathum'
          onChangeText={(e) => setInput(e)}
          keyboardType='numeric' />
        <Button title='Enter' onPress={clickHandler} />
      </View> */}
      <View style={styles.display}></View>
      <View style={styles.buttons}>
        <View style={styles.numbers}></View>
        <View style={styles.operations}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -10, */
  },

  display: {
    backgroundColor: 'yellow',
    flex: 2,
  },
  buttons: {
    /* backgroundColor: 'green', */
    flex: 6,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: 'grey',


  },
  operations: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'column'
  },
});
