import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import QuestionInput from '@/components/QuestionText';

export default function AiAssistantScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <QuestionInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
