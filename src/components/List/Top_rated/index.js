import React from 'react'
import {ScrollView, Dimensions} from 'react-native'
import styled from 'styled-components'

import CategoryTitle from '../CategoryTitle'
import MovieListCard from '../MovieListCard'

const wWidth = Dimensions.get('window').width / 4

export default function Toprated({toprated, navigation}) {
  return (
    <>
      <CategoryTitle title="높은 평점" navigation={navigation} />
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        snapToInterval={wWidth + 10}
        showsHorizontalScrollIndicator={false}>
        {toprated.map((item) => (
          <MovieListCard key={item.id} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </>
  )
}
