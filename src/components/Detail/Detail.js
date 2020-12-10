import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

export default function Detail({data}) {
  return (
    <Container>
      <Text>{data.title}</Text>
    </Container>
  )
}

const IMG_URL = 'https://image.tmdb.org/t/p/original'

const Container = styled.View`
  flex: 1;
  padding-left: 16px;
  background-color: #fff;
`;