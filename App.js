import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';

export default function App() {
  const phrases = [
    'a bunch of fives',
    'a nest of vipers',
    'act of god',
    'barking up the wrong tree',
    'beyond belief',
    'chip off the old block',
    'cut to the chase',
    'top notch',
    'elvis has left the building',
    'flesh and blood',
    'good man is hard to find',
    'hell or high water',
    'jobs for the boys',
    'knight in shining armour',
    'life begins at forty',
    'make my day',
    'wish you were here',
    'on cloud nine',
    'pie in the sky',
    'word for word',
  ];

  const [isGameRunning, setIsGameRunning] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [chosenPhrase, setChosenPhrase] = useState('');

  const getRandomPhrase = (lastPhrase = '') => {
    const randomizablePhrases = phrases.filter(
      (phrase) => phrase !== lastPhrase
    );

    const randomNumber = Math.floor(
      Math.random() * randomizablePhrases.length + 1
    );

    return setChosenPhrase(randomizablePhrases[randomNumber - 1]);
  };

  const handleStart = (playerName) => {
    getRandomPhrase();
    setPlayerName(playerName);
    setIsGameRunning(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isGameRunning ? (
        <GameScreen playerName={playerName} phrase={chosenPhrase} />
      ) : (
        <StartScreen startGame={handleStart} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a3f58',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
