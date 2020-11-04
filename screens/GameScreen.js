import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameScreen() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
