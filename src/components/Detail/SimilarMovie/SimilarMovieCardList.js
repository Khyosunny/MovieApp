import React from 'react'
import {Image, Dimensions, TouchableOpacity} from 'react-native'
import styled from 'styled-components'

const wWidth = Math.round(Dimensions.get('window').width / 3.5)

export default function SimilarMovieCardList({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.replace('DetailPage', {id: item.id})
      }}>
      <ImgWrap>
        <Image
          style={{
            width: wWidth,
            height: wWidth * 1.5,
          }}
          source={{uri: `${IMG_URL}${item.poster_path}`}}
        />
      </ImgWrap>
    </TouchableOpacity>
  )
}
const IMG_URL = 'https://image.tmdb.org/t/p/original'

const ImgWrap = styled.View`
  width: ${wWidth}px;
  height: ${wWidth * 1.5}px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 50px;
`
