import React from 'react'
import {View, Text, Image} from 'react-native'
import {Rating} from 'react-native-rating-element'

import styled from 'styled-components'

export default function Detail({data}) {
  return (
    <Container>
      <Background>
        <Image
          style={{
            opacity: 0.4,
            width: '100%',
            height: 240,
          }}
          source={{uri: `${IMG_URL}${data.detail.backdrop_path}`}}
        />
      </Background>

      <Layout>
        <AbsoluteBox>
          <Image
            style={{
              width: 137,
              height: 210,
              borderRadius: 20,
            }}
            resizeMode="contain"
            source={{uri: `${IMG_URL}${data.detail.poster_path}`}}
          />
          <Column>
            <Title>{data.detail.title}</Title>
            <Row>
              <Rating
                size={16}
                rated={data.detail.vote_average / 2}
                readonly={true}
                ratingBackgroundColor="#4f4f50"
              />
              <RatingText>{data.detail.vote_average}</RatingText>
            </Row>
            <DateAndGenres>
              {data.detail.release_date} {data.detail.genre}
            </DateAndGenres>
          </Column>
        </AbsoluteBox>
      </Layout>
    </Container>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const DateAndGenres = styled.Text`
  color: #999999;
  font-size: 14px;
  margin-top: 10px;
`

const RatingText = styled.Text`
  color: #f1c644;
  font-size: 14px;
  margin-left: 10px;
`
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #e9e9e9;
`

const Poster = styled.View`
  background-color: #b5bbe7;
`

const Column = styled.View`
  flex-direction: column;
  flex: 1;
  margin: 60px 10px 0 10px;
`

const Row = styled.View`
  flex-direction: row;
`
const AbsoluteBox = styled.View`
  flex-direction: row;
  position: absolute;
  top: -50px;
  left: 10px;
`

const Layout = styled.View`
  background-color: #2c3575;
  padding: 0 10px;
  height: 300px;
`

const Background = styled.View`
  background-color: #15161d;
`

const Container = styled.ScrollView`
  background-color: #15161d;
`
