import React from 'react'
import {ScrollView, Dimensions} from 'react-native'
import styled from 'styled-components'

import CategoryTitle from '../CategoryTitle'
import MovieListCard from '../MovieListCard'

const wWidth = Dimensions.get('window').width / 4

export default function Upcoming({upcoming, navigation}) {
  return (
    <>
      <CategoryTitle title="개봉 예정" navigation={navigation} />
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        snapToInterval={wWidth + 10}
        showsHorizontalScrollIndicator={false}>
        {upcoming.map((item) => (
          <MovieListCard key={item.id} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </>
  )
}
