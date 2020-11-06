import React from 'react';
import { View, StyleSheet } from 'react-native';
import LetterDisplay from './LetterDisplay';

export default function PhraseDisplay(props) {
  return (
    <View style={styles.container}>
      {props.phrase.map((word, index) => (
        <View style={styles.wordContainer} key={index}>
          {word.map((letter, index) => (
            <LetterDisplay letter={letter} key={`${letter}_${index}`} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '20%',
    minWidth: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  wordContainer: {
    flexDirection: 'row',
    padding: 3,
    marginHorizontal: 15,
  },
});
