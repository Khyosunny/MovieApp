import React from 'react';
import { ActivityIndicator, View } from 'react-native';


export default function LoadingPage() {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <ActivityIndicator size='large' color='#ffa1a1'/>
    </View>
  )
}