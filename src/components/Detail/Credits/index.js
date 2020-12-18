import React from 'react'
import {ScrollView, Dimensions} from 'react-native'
import styled from 'styled-components'

import SubTitle from '../SubTitle'
import Character from './Character'

const wWidth = Math.round((Dimensions.get('window').width - 40) / 4)

export default function Credits({credits}) {
  return (
    <>
      <SubTitle title="등장 인물" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={wWidth + 20}>
        {credits.map((item) => (
          <Character key={item.order} item={item} />
        ))}
      </ScrollView>
    </>
  )
}
