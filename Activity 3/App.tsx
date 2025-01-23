import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        Hello there,
        <Text style={styles.text1}> I am a Mark John Kilapkilap 3rd Yr BSIT College student </Text>
        <Text style={styles.text2}> 3rd Yr BSIT College student </Text>
      </Text>
    here at GRC.'
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {

  },
  text1: {
    color: 'red',    fontWeight: 'bold',
  },
  text2: {
    color: 'blue',
  },
  text3: {
    color: 'black',    fontWeight: 'bold',
  },

});

export default BoldAndBeautiful;