import React from 'react'
import {ScrollView, Dimensions} from 'react-native'

import CategoryTitle from '../CategoryTitle'
import MovieListCard from '../MovieListCard'

const wWidth = Dimensions.get('window').width / 4

export default function Nowplaying({nowplaying, navigation}) {
  return (
    <>
      <CategoryTitle title="현재 상영 중" navigation={navigation} />
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        snapToInterval={wWidth + 10}
        showsHorizontalScrollIndicator={false}>
        {nowplaying.map((item) => (
          <MovieListCard key={item.id} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </>
  )
}
