import React from 'react'
import {Dimensions} from 'react-native'
import FastImg from 'react-native-fast-image'
import styled from 'styled-components'

const wWidth = Math.round(Dimensions.get('window').width / 3.333)

export default function LikeMovieCardList({item, navigation}) {
  return (
    <Card
      onPress={() => {
        navigation.navigate('DetailPage', {id: item.id})
      }}>
      <ImgWrap>
        <FastImg
          style={{
            width: wWidth,
            height: wWidth * 1.5,
          }}
          source={{uri: item.poster_path}}
        />
      </ImgWrap>
      <MovieTitle numberOfLines={1}>{item.title}</MovieTitle>
    </Card>
  )
}

const MovieTitle = styled.Text`
  margin-top: 10px;
  color: #e9e9e9;
  font-size: 14px;
  font-weight: bold;
`
const ImgWrap = styled.View`
  border-radius: 5px;
  overflow: hidden;
`

const Card = styled.TouchableOpacity`
  border-radius: 5px;
  width: ${wWidth}px;
  height: ${wWidth * 1.8}px;
  margin-right: 10px;
`
