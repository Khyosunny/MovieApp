import React from 'react'
import {Dimensions, Image} from 'react-native'
import {Rating} from 'react-native-rating-element'
import styled from 'styled-components'

const wWidth = Dimensions.get('window').width / 4

export default function MainPopularMovieList({item, navigation}) {
  return (
    <Card
      onPress={() => {
        navigation.navigate('DetailPage', {id: item.id})
      }}>
      <Image
        style={{
          width: wWidth,
          height: wWidth * 1.5,
          borderRadius: 5,
        }}
        source={{uri: `${IMG_URL}${item.poster_path}`}}
      />
      <Title numberOfLines={1}>{item.title}</Title>
      <Row>
        <Rating
          size={14}
          rated={item.vote_average / 2}
          readonly={true}
          ratingBackgroundColor="#4f4f50"
        />
        <RatingText>{item.vote_average}</RatingText>
      </Row>
    </Card>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const RatingText = styled.Text`
  color: #f1c644;
  font-size: 12px;
`

const Title = styled.Text`
  margin: 10px 0 5px 0;
  color: #e9e9e9;
  font-size: 14px;
  font-weight: bold;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Card = styled.TouchableOpacity`
  width: ${wWidth}px;
  overflow: hidden;
  margin-right: 10px;
  border-radius: 5px;
`
