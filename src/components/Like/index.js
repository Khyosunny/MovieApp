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
      {data.length > 0 ? (
        <Row>
          {data.map((item) => (
            <MovieCardList key={item.id} item={item} navigation={navigation} />
          ))}
        </Row>
      ) : (
        <DefaultText>영화가 없습니다.</DefaultText>
      )}
    </Container>
  )
}

const DefaultText = styled.Text`
  color: #4f5055;
  font-size: 18px;
  align-self: center;
  margin-top: 50px;
  margin-left: -10px;
`

const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const PageTitle = styled.Text`
  width: 100%;
  font-size: 22px;
  margin: 20px 0 10px 0;
  color: #e9e9e9;
`
const Container = styled.ScrollView`
  flex: 1;
  background-color: #15161d;
`
