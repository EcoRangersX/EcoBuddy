import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function QuestionInput() {
  return (
    <View className='p-2'>
      <TextInput
        placeholder='Ask me anything about ecology...'
        mode="outlined"
        multiline={true}
        theme={{ colors: { primary: 'green' } }}
        className='w-full max-h-48 p-2'
        right={<TextInput.Icon icon={'send'} color='green' />}
      />
    </View>
  );
}
