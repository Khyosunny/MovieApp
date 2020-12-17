import React, {useEffect} from 'react'
import {Image, Dimensions} from 'react-native'
import {StackActions} from '@react-navigation/native'
import styled from 'styled-components'

const similarWidth = Math.round(Dimensions.get('window').width / 3.5)

export default function DetailSimilarMovie({item, navigation}) {
  return (
    <Container
      onPress={() => {
        navigation.replace('DetailPage', {id: item.id})
      }}>
      <ImgWrap>
        <Image
          style={{
            width: similarWidth,
            height: similarWidth * 1.5,
          }}
          source={{uri: `${IMG_URL}${item.poster_path}`}}
        />
      </ImgWrap>
    </Container>
  )
}
const IMG_URL = 'https://image.tmdb.org/t/p/original'
const ImgWrap = styled.View`
  width: ${similarWidth}px;
  height: ${similarWidth * 1.5}px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 50px;
`

const Container = styled.TouchableOpacity``
