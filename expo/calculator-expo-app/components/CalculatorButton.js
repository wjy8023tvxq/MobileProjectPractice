import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const CalculatorButton = ({ value, onPress, flexValue = 1 }) => (
  <Pressable style={[styles.button, { flex: flexValue }]} onPress={() => onPress(value)}>
    <Text style={styles.buttonText}>{value}</Text>
  </Pressable>
);

export default CalculatorButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#333',
    width: '23%',
    margin: '1%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
