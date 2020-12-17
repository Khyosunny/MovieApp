import React from 'react'
import {View, Text, Image, Dimensions, ScrollView} from 'react-native'
import styled from 'styled-components'

const wWidth = Math.round((Dimensions.get('window').width - 40) / 4)

export default function DetailCharacter({item}) {
  return (
    <Container>
      <ImgWrap>
        <Image
          style={{
            width: wWidth,
            height: wWidth,
          }}
          source={{uri: `${IMG_URL}${item.profile_path}`}}
        />
      </ImgWrap>
      <NameWrap>
        <Name fontStyle>{item.name}</Name>
        <Name>{item.character}</Name>
      </NameWrap>
    </Container>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const Name = styled.Text`
  color: #c5c5c5;
  text-align: center;
  font-size: 12px;

  ${(props) =>
    props.fontStyle &&
    `
    color: #e9e9e9;
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
    `}
`

const NameWrap = styled.View`
  width: ${wWidth}px;
  margin: 0 10px;
`

const ImgWrap = styled.View`
  width: ${wWidth}px;
  height: ${wWidth}px;
  margin: 0 10px;
  border-radius: ${wWidth}px;
  overflow: hidden;
`
const Container = styled.View`
  flex-direction: column;
`
