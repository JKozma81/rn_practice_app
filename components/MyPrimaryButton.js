import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MyPrimaryButton(props) {
  return (
    <View style={{ ...styles.buttonContainer, ...props.styles }}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.btnText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnText: {
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 5,
    textAlign: 'center',
  },
});
