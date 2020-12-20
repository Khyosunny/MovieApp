import React from 'react'
import styled from 'styled-components'

import MovieCardList from './LikeMovieCardList'

export default function Like({data, navigation}) {
  return (
    <Container
      contentContainerStyle={{
        paddingLeft: 10,
      }}>
      <PageTitle>좋아요한 영화 목록</PageTitle>
      <Row>
        {data.map((item) => (
          <MovieCardList key={item.id} item={item} navigation={navigation} />
        ))}
      </Row>
    </Container>
  )
}

const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const PageTitle = styled.Text`
  width: 100%;
  font-size: 22px;
  margin: 20px 0 10px 10px;
  color: #e9e9e9;
`
const Container = styled.ScrollView`
  flex: 1;
  background-color: #15161d;
`
