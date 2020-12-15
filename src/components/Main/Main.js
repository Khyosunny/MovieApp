import React from 'react'
import {Dimensions, ScrollView} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'

import PopularMovieList from './MainPopularMovieList'
import NowPlayingMovieList from './MainNowPlayingMovieList'
import Category from './MainCategory'

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
      <Layout>
        <Category />
      </Layout>

      <Layout>
        <Row>
          <Title>인기 영화</Title>
          <MoreBtn>
            <Icon
              style={{
                textAlign: 'center',
              }}
              name="right"
              size={22}
              color="#e9e9e9"
            />
          </MoreBtn>
        </Row>

        <ScrollView
          horizontal
          scrollEventThrottle={16}
          snapToInterval={145}
          showsHorizontalScrollIndicator={false}>
          {popularMovieList.map((item) => (
            <PopularMovieList
              key={item.id}
              item={item}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </Layout>
    </Container>
  )
}

const MoreBtn = styled.TouchableOpacity``

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

const Layout = styled.View`
  margin-top: 30px;
  padding-left: 10px;
`

const Container = styled.ScrollView`
  flex: 1;
  background-color: #15161d;
`
