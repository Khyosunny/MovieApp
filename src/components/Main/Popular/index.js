import React from 'react'
import {ScrollView, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'

import PopularMovieList from './MainPopularMovieList'

const wWidth = Math.round(Dimensions.get('window').width / 4)

export default function Popular({popularMovieList, navigation}) {
  return (
    <Container>
      <Row>
        <Title>인기 영화</Title>
        <MoreButton
          onPress={() => {
            navigation.navigate('ListDetailPage', {category: 'popular'})
          }}>
          <Icon
            style={{
              textAlign: 'center',
            }}
            name="right"
            size={22}
            color="#e9e9e9"
          />
        </MoreButton>
      </Row>
      <ScrollView
        horizontal
        scrollEventThrottle={16}
        snapToInterval={wWidth + 10}
        showsHorizontalScrollIndicator={false}>
        {popularMovieList.map((item) => (
          <PopularMovieList key={item.id} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </Container>
  )
}

const MoreButton = styled.TouchableOpacity``

const Title = styled.Text`
  color: #e9e9e9;
  font-size: 16px;
  font-weight: bold;
`

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.View`
  margin: 30px 10px 0;
`
