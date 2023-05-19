import {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

export const InputBox = () => {
  const [text, setText] = useState('');

  const handleChangeText = (value: string) => {
    setText(value);
  };

  return (
    <TextInput
      style={styles.inputBox}
      value={text}
      onChangeText={handleChangeText}
      placeholder="Enter Task"
    />
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
