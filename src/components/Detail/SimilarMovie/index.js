import React from 'react'
import styled from 'styled-components'

import SubTitle from '../SubTitle'
import SimilarMovieCardList from './SimilarMovieCardList'

export default function SimilarMovie({similarMovie, navigation}) {
  return (
    <>
      <SubTitle title="추천 영화" />

      <Row>
        {similarMovie.length === 0 ? (
          <EmptyMovie>영화가 없습니다.</EmptyMovie>
        ) : (
          similarMovie.map((item) => (
            <SimilarMovieCardList
              key={item.id}
              item={item}
              navigation={navigation}
            />
          ))
        )}
      </Row>
    </>
  )
}

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const EmptyMovie = styled.Text`
  color: #c5c5c5;
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 80px;
  font-size: 14px;
`
