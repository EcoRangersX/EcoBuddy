import React from 'react';
import { View } from 'react-native';
import Header from '@/components/Header';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function AiAssistantScreen() {
  const [question, setQuestion] = useState('')

  return (
    <View className='flex-1'>
      <Header />
      <View className='p-2 flex-1 justify-end'>
        <TextInput
        placeholder='Ask me anything about ecology...'
        mode="outlined"
        multiline={true}
        theme={{ colors: { primary: 'green' } }}
        className='w-full max-h-48 p-2'
        right={<TextInput.Icon icon={'send'} color='green' />}
      />
      </View>
    </View>
  );
}
