import React from 'react';
import { View, Text, Image, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-swiper'

import PopularMovieList from './MainPopularMovieList';
import NowPlayingMovieList from './MainNowPlayingMovieList';
import Category from './MainCategory'

const wWidth = Dimensions.get('window').width



export default function Main({ popularMovieList, nowMovieList, navigation }) {
  return (
    <Container>
      <Swiper
        autoplay={true}
        containerStyle={{
          flex: 0
        }}
        width={wWidth}
        height={230}
        activeDotColor='#c0bfd8'
        dotColor='rgba(155, 155, 155, 0.329)'
        paginationStyle={{
          bottom: 10
        }}
      >
        {
          nowMovieList.map((item) => (
            <NowPlayingMovieList key={item.id} item={item} navigation={navigation}/>
          ))
        }
      </Swiper> 
      <Layout>
        <Category />
      </Layout>
      
      <Layout>
        <Row>
          <Title>인기 영화</Title>
          <MoreBtn>
            <MoreText>〉</MoreText>
          </MoreBtn>
        </Row>
        {/* <FlatList
          data={data}
          style={{ backgroundColor: '#8db5ff' }}
          keyExtractor={(item) => item.id.toString()}
          bounces={false}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <CardList {...{ item }} />
          )}
          horizontal
          snapToInterval={122}
          showsHorizontalScrollIndicator={false}
        /> */}
        <ScrollView
          horizontal
          scrollEventThrottle={16}
          snapToInterval={145}
          showsHorizontalScrollIndicator={false}
        >
          {
            popularMovieList.map((item) => (
              <PopularMovieList key={item.id} item={item} navigation={navigation}/>
            ))
          }
        </ScrollView>
      </Layout>

    </Container>
  )
}
const IMG_URL = 'https://image.tmdb.org/t/p/original'


const MoreText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #b9b9b9;
`;

const MoreBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  background-color: #fff;
`;

const SmallText = styled.Text`
  font-size: 12px;
  color: #666;
  margin-top: 16px;
`;

const MovieTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Title = styled.Text`
  color: #e9e9e9;
  font-size: 16px;
  font-weight: bold;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Layout = styled.View`
  margin-top: 30px;
  padding-left: 10px;
`;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #15161d;
`;