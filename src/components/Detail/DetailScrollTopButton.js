import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/AntDesign'

export default function DetailScrollTopButton({scrollToTop}) {
  return (
    <Container onPress={scrollToTop}>
      <Icon name="arrowup" size={25} color="#505050" />
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  position: absolute;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  padding: 10px;
  border-radius: 50px;
  background-color: #e9e9e9;
`
