import React from 'react'
import {ScrollView, Dimensions} from 'react-native'
import styled from 'styled-components'

import CategoryTitle from '../CategoryTitle'
import MovieListCard from '../MovieListCard'

const wWidth = Dimensions.get('window').width / 4

export default function Popular({popular, navigation}) {
  return (
    <>
      <CategoryTitle title="인기 영화" navigation={navigation} />
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        snapToInterval={wWidth + 10}
        showsHorizontalScrollIndicator={false}>
        {popular.map((item) => (
          <MovieListCard key={item.id} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </>
  )
}
