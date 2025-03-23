import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;