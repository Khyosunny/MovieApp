import React from 'react'
import {Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import styled from 'styled-components'

import NowPlayingMovieList from './MainNowPlayingMovieList'
import Genres from './MainGenres'
import Popular from './Popular'

const wWidth = Dimensions.get('window').width

export default function Main({popularMovieList, nowMovieList, navigation}) {
  return (
    <Container>
      <Swiper
        autoplay={true}
        containerStyle={{
          flex: 0,
        }}
        width={wWidth}
        height={230}
        activeDotColor="#c0bfd8"
        dotColor="rgba(155, 155, 155, 0.329)"
        paginationStyle={{
          bottom: 10,
        }}>
        {nowMovieList.map((item) => (
          <NowPlayingMovieList
            key={item.id}
            item={item}
            navigation={navigation}
          />
        ))}
      </Swiper>

      <Genres navigation={navigation} />
      <Popular popularMovieList={popularMovieList} navigation={navigation} />
    </Container>
  )
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: #15161d;
`
