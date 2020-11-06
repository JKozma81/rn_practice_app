import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyPrimaryButton from '../components/MyPrimaryButton';
import MyTextInput from '../components/MyTextInput';

export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Phrase Hunter</Text>
      <View style={styles.nameInputContainer}>
        <Text>Name:</Text>
        <MyTextInput placeholder="Enter your name" />
        <MyPrimaryButton>Start the Game</MyPrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameInputContainer: {
    minHeight: '33%',
    minWidth: '75%',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 20,
  },
});
