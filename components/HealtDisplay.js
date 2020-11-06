import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function HealtDisplay(props) {
  const displayedLifes = [];

  for (let i = 1; i <= props.playerLife; i++) {
    displayedLifes.push(
      <Image
        key={`heart_${i}`}
        source={require('../assets/images/liveHeart.png')}
        style={styles.heart}
      />
    );
  }

  return <View style={styles.heartContainer}>{displayedLifes}</View>;
}

const styles = StyleSheet.create({
  heartContainer: {
    minHeight: 50,
    minWidth: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginVertical: 15,
  },
  heart: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    margin: 5,
  },
});
