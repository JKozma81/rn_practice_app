import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuertyButton from './QuertyButton';

export default function QuertyKeboard() {
  const buttons = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];
  return (
    <View style={styles.container}>
      {buttons.map((buttonRow, index) => (
        <View style={styles.buttonRow} key={index}>
          {buttonRow.map((quertyKey) => (
            <QuertyButton key={quertyKey}>{quertyKey}</QuertyButton>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  buttonRow: {
    flexDirection: 'row',
    padding: 5,
  },
});
