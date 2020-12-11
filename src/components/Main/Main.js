import React from 'react';
import { View, Text, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';

import PopularMovieList from './MainPopularMovieList';
import Category from './MainCategory'

const renderItem = ({ item, index }) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}


export default function Main({ popularMovieList, nowMovieList, navigation }) {
  return (
    <Container>
      <Layout>
        <Carousel
          data={nowMovieList}
          renderItem={renderItem}
          sliderWidth={200}
          itemWidth={70}
        />
      

      </Layout>
     
      <Layout>
        <Row>
          <Title>카테고리</Title>
        </Row>
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



const RandomImg = styled.Image`
  width: 120px;
  height: 180px;
`;

const RandomTextBox = styled.View`
  flex: 1;
  padding: 10px;
`;

const RandomBox = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 10px;
  background-color: #f9f9f9;
  border-radius: 7px;
`;

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
`;

const Container = styled.ScrollView`
  flex: 1;
  padding-left: 10px;
  background-color: #171120;
`;