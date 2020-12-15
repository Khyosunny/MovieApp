import React from 'react'
import {ActivityIndicator, View} from 'react-native'

export default function LoadingPage() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#15161d',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  )
}
