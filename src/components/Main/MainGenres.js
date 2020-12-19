import React from 'react'
import {ScrollView} from 'react-native'
import styled from 'styled-components'

const genresData = [
  {
    key: 0,
    label: '#액션/판타지',
    title: '액션/판타지',
    color: '#c4e4ff',
    genres: [28, 14],
  },
  {
    key: 1,
    label: '#공포/스릴러',
    title: '공포/스릴러',
    color: '#ffdddd',
    genres: [27, 53],
  },
  {
    key: 2,
    label: '#드라마/가족',
    title: '드라마/가족',
    color: '#ffebca',
    genres: [18, 10751],
  },
  {
    key: 3,
    label: '#로맨스/코미디',
    title: '로맨스/코미디',
    color: '#ffd5ed',
    genres: [10749, 35],
  },
  {
    key: 4,
    label: '#전쟁/SF',
    title: '전쟁/SF',
    color: '#cfece1',
    genres: [10752, 878],
  },
]

export default function MainGenres({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 30,
      }}
      horizontal
      scrollEventThrottle={16}
      snapToInterval={100}
      showsHorizontalScrollIndicator={false}>
      {genresData.map((item) => (
        <GenresBtn
          key={item.key}
          onPress={() => {
            navigation.navigate('ListDetailPage', {
              category: 'now_playing',
              genres: item.genres,
              title: item.title,
            })
          }}>
          <Genre
            style={{
              color: `${item.color}`,
            }}>
            {item.label}
          </Genre>
        </GenresBtn>
      ))}
    </ScrollView>
  )
}

const Genre = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`

const GenresBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0 20px;
  border-radius: 5px;
`
