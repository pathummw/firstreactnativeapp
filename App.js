import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [input, setInput] = useState(0);

  const clickHandler = () => {
    setInput(input + 2);
  }

  return (
    <View style={styles.container}>
      <Text>Hello {input}</Text>

      <View style={styles.buttonContainer}>
        <TextInput style={styles.input}
          placeholder='e.g. Pathum'
          onChangeText={(e) => setInput(e)}
          keyboardType='numeric' />
        <Button title='Enter' onPress={clickHandler} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderBottomColor: 'black',
    padding: 8,
    margin: 10,
    borderWidth: 1,
  }
});
