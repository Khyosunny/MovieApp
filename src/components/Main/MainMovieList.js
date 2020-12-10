import React from 'react';
import styled from 'styled-components';

export default function MainMovieList({ item, navigation }) {
  return (
    <Card
      style={{
        elevation: 7,
      }}
      onPress={() => { navigation.navigate('DetailPage', { id: item.id }) }}>
      <Img
        resizeMode='contain'
        source={{ uri: `${IMG_URL}${item.poster_path}` }} />
    </Card>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const Img = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;

const Card = styled.TouchableOpacity`
  width: 135px;
  height: 202px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #eee;
`;