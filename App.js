import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartScreen />
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
