import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LetterDisplay from './LetterDisplay';

export default function PhraseDisplay(props) {
  const [phrase, setPhrase] = useState(props.phrase);

  const wordsAndLetters = phrase.split(' ').map((word) => {
    return word.split('').map((letter) => ({
      visible: false,
      letter: letter,
    }));
  });

  return (
    <View style={styles.container}>
      {wordsAndLetters.map((word, index) => (
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
