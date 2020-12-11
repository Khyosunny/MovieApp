import React from 'react';
import styled from 'styled-components';

export default function MainPopularMovieList({ item, navigation }) {
  return (
    <Card
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
  width: 105px;
  height: 158px;
  margin-right: 10px;
  border-radius: 5px;
`;