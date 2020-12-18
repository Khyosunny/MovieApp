import React from 'react'
import styled from 'styled-components'

export default function SubTitle({title}) {
  return <Title>{title}</Title>
}

const Title = styled.Text`
  font-size: 18px;
  color: #e9e9e9;
  margin-top: 30px;
  margin-bottom: 10px;
`
