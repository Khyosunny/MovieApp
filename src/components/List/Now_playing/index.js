import React from 'react'
import {ScrollView, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'

import MovieListCard from '../MovieListCard'

const wWidth = Dimensions.get('window').width / 4

export default function Nowplaying({nowplaying, navigation}) {
  return (
    <>
      <Row>
        <SubTitle>현재 상영 중</SubTitle>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ListDetailPage', {
              category: 'now_playing',
            })
          }}>
          <Icon
            style={{
              textAlign: 'center',
            }}
            name="right"
            size={24}
            color="#e9e9e9"
          />
        </TouchableOpacity>
      </Row>
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

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`
const SubTitle = styled.Text`
  font-size: 20px;
  color: #e9e9e9;
`
