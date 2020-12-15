import React, {useState} from 'react'
import {View, Text, Image} from 'react-native'
import {Rating} from 'react-native-rating-element'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LeftIcon from 'react-native-vector-icons/AntDesign'
import MoreIcon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components'

export default function Detail({data, navigation}) {
  const [showMoreButton, setShowMoreButton] = useState(false)
  const [numOfLine, setNumOfLine] = useState(5)
  return (
    <Container>
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
          source={{uri: `${IMG_URL}${data.detail.backdrop_path}`}}
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
            source={{uri: `${IMG_URL}${data.detail.poster_path}`}}
          />
          <Column>
            <MovieTitle>{data.detail.title}</MovieTitle>
            <Row>
              <Rating
                size={17}
                rated={data.detail.vote_average / 2}
                readonly={true}
                ratingBackgroundColor="#4f4f50"
              />
              <RatingText>{data.detail.vote_average}</RatingText>
            </Row>
            <Row>
              <Infor>{data.detail.release_date}</Infor>
              <Infor>{data.detail.runtime}분</Infor>
              <Infor>{data.detail.genre}</Infor>
            </Row>
          </Column>
        </AbsoluteBox>
      </PosterLayout>

      <Layout>
        <SubTitle>줄거리</SubTitle>
        <Overview
          numberOfLines={numOfLine}
          onTextLayout={(e) =>
            setShowMoreButton(e.nativeEvent.lines.length >= numOfLine)
          }>
          {data.detail.overview}
        </Overview>

        {showMoreButton && (
          <ShowMoreButton
            onPress={() => {
              setShowMoreButton(false)
              setNumOfLine(100)
            }}>
            <Row>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#8375ff',
                }}>
                더보기
              </Text>
              <MoreIcon name="expand-more" size={20} color="#8375ff" />
            </Row>
          </ShowMoreButton>
        )}
      </Layout>

      <Layout>
        <SubTitle>등장 인물</SubTitle>
      </Layout>
    </Container>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const ShowMoreButton = styled.TouchableOpacity`
  align-self: center;
  padding: 10px;
`
const Overview = styled.Text`
  font-size: 14px;
  color: #c5c5c5;
`

const SubTitle = styled.Text`
  font-size: 18px;
  color: #e9e9e9;
  margin-bottom: 10px;
`

const Layout = styled.View`
  /* background-color: #3b3b3b; */
  margin: 30px 10px 0;
`

const Infor = styled.Text`
  background-color: #2b2d3a;
  border-radius: 3px;
  color: #c5c5c5;
  font-size: 14px;
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
  margin: 70px 0 0 10px;
`

const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`
const AbsoluteBox = styled.View`
  flex-direction: row;
  position: absolute;
  top: -50px;
  left: 10px;
`

const PosterLayout = styled.View`
  padding: 0 10px;
  height: 180px;
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
const Container = styled.ScrollView`
  background-color: #15161d;
`
