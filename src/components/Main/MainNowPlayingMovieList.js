import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import FastImg from 'react-native-fast-image'
import styled from 'styled-components'

export default function MainNowPlayingMovieList({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage', {id: item.id})
      }}>
      <TextBox>
        <Title>{item.title}</Title>
        <Date>{item.release_date.slice(0, 4)}</Date>
      </TextBox>
      <View
        style={{
          backgroundColor: '#15161d',
        }}>
        <FastImg
          style={{
            opacity: 0.8,
            width: '100%',
            height: '100%',
          }}
          source={{uri: `${IMG_URL}${item.backdrop_path}`}}
        />
      </View>
    </TouchableOpacity>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const Date = styled.Text`
  font-size: 14px;
  color: #cac9c9;
`

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #e9e9e9;
`

const TextBox = styled.View`
  position: absolute;
  left: 20px;
  bottom: 30px;
  z-index: 5;
`
