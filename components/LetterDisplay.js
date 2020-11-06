import React, { useState } from 'react';
import { View, Text, StyleSheet, ImagePropTypes } from 'react-native';

export default function LetterDisplay(props) {
  const visibleLetter = (
    <View style={styles.visibleLetterContainer}>
      <Text style={styles.letter}>{props.letter.letter}</Text>
    </View>
  );

  const hiddenLetter = (
    <View style={styles.hiddenLetterContainer}>
      <Text style={styles.letter}> </Text>
    </View>
  );

  return props.letter.visible ? visibleLetter : hiddenLetter;
}

const styles = StyleSheet.create({
  hiddenLetterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    width: 30,
    height: 30,
    backgroundColor: '#E5E5E5',
    borderBottomWidth: 3,
    borderBottomColor: 'black',
  },
  visibleLetterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
    marginHorizontal: 3,
    width: 30,
    height: 30,
    backgroundColor: '#E5E5E5',
  },
  letter: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#37474F',
  },
});
