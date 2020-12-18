import React from 'react'
import {ScrollView} from 'react-native'

import Popular from './Popular'
import Nowplaying from './Now_playing'
import Upcoming from './Upcoming'
import Toprated from './Top_rated'

export default function List({data, navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: '#15161d',
        paddingTop: 30,
        paddingHorizontal: 10,
      }}
      scrollEventThrottle={16}>
      <Popular popular={data.popular} navigation={navigation} />
      <Nowplaying nowplaying={data.nowplaying} navigation={navigation} />
      <Upcoming upcoming={data.upcoming} navigation={navigation} />
      <Toprated toprated={data.toprated} navigation={navigation} />
    </ScrollView>
  )
}
