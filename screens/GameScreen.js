import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HealtDisplay from '../components/HealtDisplay';
import PhraseDisplay from '../components/PhraseDisplay';
import QuertyKeboard from '../components/QuertyKeboard';

export default function GameScreen(props) {
  const [playerLife, setPlayerLife] = useState(5);
  const [winCondition, setWinCondition] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  const splitPhrase = (phrase) => {
    const splittedPhrase = phrase.split(' ').map((word) => {
      return word.split('').map((letter) => ({
        visible: false,
        letter: letter,
      }));
    });
    return splittedPhrase;
  };

  const [wordsAndLetters, setWordsAndLetters] = useState(
    splitPhrase(props.phrase)
  );

  useEffect(() => {
    const remainingLetters = wordsAndLetters.reduce(
      (accumulator, word) =>
        (accumulator += word.filter((letter) => !letter.visible).length),
      0
    );

    setLetterCount(remainingLetters);
  });

  const checkLetter = (searchedLetter) => {
    const result = wordsAndLetters.reduce((accumulator, currentValue) => {
      currentValue.forEach((letter) => {
        if (letter.letter === searchedLetter) {
          accumulator += 1;
        }
      });
      return accumulator;
    }, 0);
    return result;
  };

  const checkForWin = (letterCount) => {
    // const remainingLetters = wordsAndLetters.reduce(
    //   (accumulator, word) =>
    //     (accumulator += word.filter((letter) => !letter.visible).length),
    //   0
    // );

    if (!letterCount && playerLife) {
      setWinCondition('win');
      console.log(winCondition);
    }

    if (letterCount && !playerLife) {
      setWinCondition('lost');
      console.log(winCondition);
    }
  };

  const revealLetter = (searchedLetter) => {
    if (checkLetter(searchedLetter) > 0) {
      const revealedLetters = wordsAndLetters.map((word) =>
        word.map((letter) =>
          searchedLetter === letter.letter
            ? { visible: true, letter: letter.letter }
            : letter
        )
      );
      setWordsAndLetters(revealedLetters);
    } else {
      setPlayerLife((prevValue) => prevValue - 1);
    }
  };

  // useEffect(() => {
  //   checkForWin(wordsAndLetters);
  // });

  const handleButtonPress = (button) => {
    revealLetter(button);
    checkForWin(letterCount);
  };

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
