import React, {useCallback, useRef} from 'react'
import {Image, ScrollView} from 'react-native'
import {Rating} from 'react-native-rating-element'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LeftIcon from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'

import Overview from './Overview'
import Credits from './Credits'
import SimilarMovie from './SimilarMovie'
import ScrollTopButton from '../ScrollTopButton'

export default function Detail({data, navigation}) {
  console.log('디테일', data)
  const scrollRef = useRef()

  const onScrollToTop = useCallback(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    })
  }, [])

  return (
    <>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        contentContainerStyle={{
          backgroundColor: '#15161d',
        }}>
        <Background>
          <ButtonBox>
            <Button
              onPress={() => {
                navigation.goBack()
              }}>
              <LeftIcon name="left" size={30} color="#e9e9e9" />
            </Button>
            <Button>
              <MaterialIcon name="heart-outline" size={30} color="tomato" />
            </Button>
          </ButtonBox>
          <Image
            style={{
              opacity: 0.4,
              width: '100%',
              height: 230,
            }}
            source={{uri: data.detail.backdrop_path}}
          />
        </Background>

        <PosterLayout>
          <AbsoluteBox>
            <Image
              style={{
                width: 137,
                height: 210,
                borderRadius: 20,
              }}
              resizeMode="contain"
              source={{uri: data.detail.poster_path}}
            />
            <Column>
              <MovieTitle>{data.detail.title}</MovieTitle>
              <Row>
                <Rating
                  size={16}
                  rated={data.detail.vote_average / 2}
                  readonly={true}
                  ratingBackgroundColor="#4f4f50"
                />
                <RatingText>{data.detail.vote_average}</RatingText>
              </Row>
              <Row wrap="wrap">
                <Infor>{data.detail.release_date}</Infor>
                <Infor>{data.detail.runtime}분</Infor>
                <Infor>{data.detail.genre}</Infor>
              </Row>
            </Column>
          </AbsoluteBox>
        </PosterLayout>

        <Overview overview={data.detail.overview} />
        <Credits credits={data.credits} />
        <SimilarMovie
          similarMovie={data.similarMovie}
          navigation={navigation}
        />
      </ScrollView>
      <ScrollTopButton onScrollToTop={onScrollToTop} />
    </>
  )
}

const Infor = styled.Text`
  background-color: #2b2d3a;
  border-radius: 3px;
  color: #c5c5c5;
  font-size: 13px;
  padding: 2px;
  margin: 10px 10px 0 0;
`

const RatingText = styled.Text`
  color: #f1c644;
  font-size: 14px;
  margin-left: 10px;
`
const MovieTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #e9e9e9;
`

const Column = styled.View`
  flex-direction: column;
  flex: 1;
  margin: 55px 0 0 10px;
`

const Row = styled.View`
  flex-direction: row;
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
`
const AbsoluteBox = styled.View`
  flex-direction: row;
  position: absolute;
  top: -40px;
  left: 10px;
`

const PosterLayout = styled.View`
  padding: 0 10px;
  height: 160px;
`

const Background = styled.View`
  background-color: #15161d;
`

const Button = styled.TouchableOpacity`
  padding: 10px;
`

const ButtonBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 10px;
  z-index: 5;
`
