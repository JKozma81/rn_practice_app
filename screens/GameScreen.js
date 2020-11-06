import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HealtDisplay from '../components/HealtDisplay';
import PhraseDisplay from '../components/PhraseDisplay';
import QuertyKeboard from '../components/QuertyKeboard';

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <PhraseDisplay phrase={'ez egy teszt phrase'} />
      <HealtDisplay />
      <QuertyKeboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
