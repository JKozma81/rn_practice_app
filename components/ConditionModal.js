import React from 'react';
import { View, Text, Modal } from 'react-native';

export default function ConditionModal(props) {
  const win = (
    <View>
      <Text></Text>
    </View>
  );

  const lost = (
    <View>
      <Text></Text>
    </View>
  );

  return (
    <Modal>
      {props.condition === 'win' ? win : props.condition === 'lost' ? lost : ''}
    </Modal>
  );
}
