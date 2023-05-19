import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {InputBox} from './InputBox';

/**
 * OPEN CLOSE PRINCIPLE
 * Instead of extending InputBox I just used it as composition in another component
 * so both of these components are decoupled from eachother I can change input box
 * or change/ add / or remove label text from here as well
 * I can even change text input to checkbox and use this same component for adding label
 */

interface InputTextWithLabel {
  label: string;
}

export const InputTextWithLabel: FC<InputTextWithLabel> = ({label}) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.text}>{label}</Text>
      <InputBox />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 40,
  },
  text: {
    marginLeft: 12,
  },
});
