import React from 'react'
import {Image, Dimensions} from 'react-native'
import styled from 'styled-components'

const wWidth = Dimensions.get('window').width / 4

export default function MovieList({item, navigation}) {
  return (
    <Card
      onPress={() => {
        navigation.navigate('DetailPage', {id: item.id})
      }}>
      <Image
        style={{
          width: wWidth,
          height: wWidth * 1.5,
        }}
        source={{uri: `${IMG_URL}${item.poster_path}`}}
      />
    </Card>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const Card = styled.TouchableOpacity`
  margin-right: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
`
