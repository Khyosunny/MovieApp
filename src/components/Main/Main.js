import React from 'react';
import { View, Text, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image'

import MovieList from './MainMovieList';
import Category from './MainCategory'

export default function Main({ data, randomItem, navigation }) {
  return (
    <Container>
      <Layout>
        <Row>
          <Title>인기 영화</Title>
          <MoreBtn>
            <MoreText>더보기 〉</MoreText>
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
            data.map((item) => (
              <MovieList key={item.id} item={item} navigation={navigation}/>
            ))
          }
        </ScrollView>
      </Layout>
     
      <Layout>
        <Row>
          <Title>카테고리</Title>
        </Row>
          <Category />
      </Layout>
      
      <Layout>
        <Row>
          <Title>추천 영화</Title>
        </Row>
        <RandomBox
          style={{
            elevation: 2,
          }}
          onPress={() => { navigation.navigate('DetailPage', { id: randomItem.id })}}
        >
          <RandomImg
            style={{
              borderBottomLeftRadius: 20,
              borderTopLeftRadius: 20
            }}
            resizeMode='contain'
            source={{ uri: `${IMG_URL}${randomItem.poster_path}` }}
          />
          <RandomTextBox>
            <MovieTitle>
              {randomItem.title}
            </MovieTitle>
            <Text
              style={{
                color: '#ffa705'
              }}
            >★★★★★</Text>
            <SmallText
              numberOfLines={4}
            >
              {randomItem.overview}
            </SmallText>
          </RandomTextBox>
        </RandomBox>
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
  margin-bottom: 30px;
  margin-right: 10px;
  background-color: #f9f9f9;
  border-radius: 7px;
`;

const MoreText = styled.Text`
  font-size: 14px;
  line-height: 20px;
`;

const MoreBtn = styled.TouchableOpacity`
  width: 70px;
  height: 20px;
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
  background-color: #f4f4f5;
`;