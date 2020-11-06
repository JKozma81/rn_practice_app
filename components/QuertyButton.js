import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuertyButton(props) {
  const [isDisabled, setIsDisabled] = useState(false);

  const clickHandler = () => setIsDisabled(true);

  const clickableButton = (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={clickHandler}>
        <Text style={styles.btnText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );

  const disabledButton = (
    <View style={styles.disabledButtonContainer}>
      <Text style={styles.disabledBtnText}>{props.children}</Text>
    </View>
  );

  return isDisabled ? disabledButton : clickableButton;
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
    marginHorizontal: 3,
    width: 30,
    height: 30,
    backgroundColor: '#E5E5E5',
  },
  disabledButtonContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
    marginHorizontal: 3,
    width: 30,
    height: 30,
    backgroundColor: '#3a3f58',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#37474F',
  },
  disabledBtnText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});
