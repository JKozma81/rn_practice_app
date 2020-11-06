import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HealtDisplay from '../components/HealtDisplay';
import PhraseDisplay from '../components/PhraseDisplay';
import QuertyKeboard from '../components/QuertyKeboard';

const splitPhrase = (phrase) => {
  const splittedPhrase = phrase.split(' ').map((word) => {
    return word.split('').map((letter) => ({
      visible: false,
      letter: letter,
    }));
  });
  return splittedPhrase;
};

const checkLetter = (searchedLetter, wordsArray) => {
  const result = wordsArray.reduce((accumulator, currentValue) => {
    currentValue.forEach((letter) => {
      if (letter.letter === searchedLetter) {
        accumulator += 1;
      }
    });
    return accumulator;
  }, 0);
  return result;
};

const countRemainingLetters = (wordsArray) => {
  return wordsArray.reduce(
    (accumulator, word) =>
      (accumulator += word.filter((letter) => !letter.visible).length),
    0
  );
};

const revealLetter = (searchArray, searchedLetter) => {
  const revealedLetters = searchArray.map((word) =>
    word.map((letter) =>
      searchedLetter === letter.letter
        ? { ...letter, visible: true }
        : { ...letter }
    )
  );

  return revealedLetters;
};

export default function GameScreen({ phrase }) {
  const [wordsAndLetters, setWordsAndLetters] = useState(splitPhrase(phrase));
  const [playerLife, setPlayerLife] = useState(5);
  const [winCondition, setWinCondition] = useState('');

  const [lettersRemaining, setLettersRemaining] = useState(
    countRemainingLetters(wordsAndLetters)
  );

  const checkForWin = () => {
    console.log('in check');
    if (!lettersRemaining && playerLife) {
      // setWinCondition('win');
      console.log('win');
    }

    if (lettersRemaining && !playerLife) {
      // setWinCondition('lost');
      console.log('lost');
    }
  };

  const handleButtonPress = (button) => {
    if (checkLetter(button, wordsAndLetters) > 0) {
      const revealedLetters = revealLetter(wordsAndLetters, button);
      setWordsAndLetters(revealedLetters);
      setLettersRemaining(revealedLetters);
    } else {
      setPlayerLife((prevValue) => prevValue - 1);
    }
  };

  useEffect(() => {
    checkForWin();
  }, [wordsAndLetters, playerLife]);

  return (
    <View style={styles.container}>
      <PhraseDisplay phrase={wordsAndLetters} />
      <HealtDisplay playerLife={playerLife} />
      <QuertyKeboard handleButtonPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
