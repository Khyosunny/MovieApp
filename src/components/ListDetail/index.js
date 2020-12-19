import React, {useRef, useCallback} from 'react'
import {ScrollView, Dimensions, View} from 'react-native'
import LeftIcon from 'react-native-vector-icons/AntDesign'
import FastImg from 'react-native-fast-image'
import styled from 'styled-components'

import ScrollTopButton from '../ScrollTopButton'
const wWidth = Math.round(Dimensions.get('window').width / 3.5)

export default function ListDetail({
  data,
  navigation,
  pageTitle,
  category,
  title,
}) {
  const scrollRef = useRef()

  const onScrollToTop = useCallback(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    })
  }, [])
  return (
    <View style={{backgroundColor: '#15161d', flex: 1}}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          backgroundColor: '#15161d',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        scrollEventThrottle={16}>
        <Row alignItems="center">
          <Button
            onPress={() => {
              navigation.goBack()
            }}>
            <LeftIcon name="left" size={30} color="#e9e9e9" />
          </Button>
          <PageTitle>{title ? title : pageTitle[category]}</PageTitle>
        </Row>
        <Row wrap>
          {data.map((item) => (
            <Card
              key={item.id}
              onPress={() => {
                navigation.navigate('DetailPage', {id: item.id})
              }}>
              <ImgWrap>
                <FastImg
                  style={{
                    width: wWidth,
                    height: wWidth * 1.5,
                  }}
                  source={{uri: `${IMG_URL}${item.poster_path}`}}
                />
              </ImgWrap>
              <MovieTitle numberOfLines={1}>{item.title}</MovieTitle>
            </Card>
          ))}
        </Row>
      </ScrollView>
      <ScrollTopButton onScrollToTop={onScrollToTop} />
    </View>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const MovieTitle = styled.Text`
  margin: 10px 0 15px;
  color: #e9e9e9;
  font-size: 14px;
  font-weight: bold;
`

const ImgWrap = styled.View`
  overflow: hidden;
  border-radius: 5px;
`
const Card = styled.TouchableOpacity`
  flex-basis: 30%;
  margin: 0 1.666%;
  overflow: hidden;
  border-radius: 5px;
  width: ${wWidth}px;
`

const Row = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};

  ${(props) =>
    props.wrap &&
    `
  flex-wrap: wrap;
  `}
`

const Button = styled.TouchableOpacity`
  padding: 10px;
`

const PageTitle = styled.Text`
  font-size: 22px;
  margin-left: 10px;
  color: #e9e9e9;
`
