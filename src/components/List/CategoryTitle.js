import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components'

export default function CategoryTitle({title, navigation}) {
  return (
    <Row>
      <SubTitle>{title}</SubTitle>
      <MoreButton>
        <Icon
          style={{
            textAlign: 'center',
          }}
          name="right"
          size={22}
          color="#e9e9e9"
        />
      </MoreButton>
    </Row>
  )
}

const MoreButton = styled.TouchableOpacity``

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`
const SubTitle = styled.Text`
  font-size: 18px;
  color: #e9e9e9;
`
