import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: color}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default Button;