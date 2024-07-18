import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C']
  ];


  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity key={button} style={styles.button} onPress={() => handlePress(button)}>
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  result: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
  },
  buttons: {
    flex: 8,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999',
  },
  buttonText: {
    fontSize: 24,
  },
});
