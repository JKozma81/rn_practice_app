import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default function MyTextInput(props) {
  return (
    <View style={styles.container}>
      <TextInput
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        styles={{ ...styles.textInput, ...props.styles }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 20,
    paddingHorizontal: 5,
  },
});
