import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styled from 'styled-components'

export default function Search({
  navigation,
  setSearchValue,
  SearchValue,
  getQuery,
}) {
  return (
    <Container>
      <PageTitle>영화 검색</PageTitle>
      <TextInput
        placeholder="검색어를 입력하세요."
        value={SearchValue}
        defaultValue=""
        onChangeText={(text) => setSearchValue(text)}
      />
      {getQuery ? (
        getQuery.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate('DetailPage', {id: item.id})
            }}>
            <SearchResultTitle>{item.title}</SearchResultTitle>
          </TouchableOpacity>
        ))
      ) : (
        <DefaultText>검색 결과가 없습니다.</DefaultText>
      )}
    </Container>
  )
}

const SearchResultTitle = styled.Text`
  color: #e9e9e9;
  font-size: 18px;
  margin: 10px;
`

const DefaultText = styled.Text`
  color: #4f5055;
  font-size: 18px;
  align-self: center;
  margin-top: 50px;
`

const TextInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  color: #e9e9e9;
  background-color: #4f5055;
  border-radius: 30px;
  margin-bottom: 20px;
`

const PageTitle = styled.Text`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #e9e9e9;
`

const Container = styled.ScrollView`
  flex: 1;
  padding: 0 10px;
  background-color: #15161d;
`
