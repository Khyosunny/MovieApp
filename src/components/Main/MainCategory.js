import React from 'react'
import {ScrollView} from 'react-native'
import styled from 'styled-components'

const type = [
  {
    key: 0,
    label: '#액션/판타지',
    color: '#c4e4ff',
  },
  {
    key: 1,
    label: '#공포/스릴러',
    color: '#ffdddd',
  },
  {
    key: 2,
    label: '#코미디',
    color: '#ffebca',
  },
  {
    key: 3,
    label: '#로맨스',
    color: '#ffd5ed',
  },
  {
    key: 4,
    label: '#전쟁',
    color: '#cfece1',
  },
]

export default function MainCategory() {
  return (
    <ScrollView
      horizontal
      scrollEventThrottle={16}
      snapToInterval={100}
      showsHorizontalScrollIndicator={false}>
      {type.map((item) => (
        <CateBtn key={item.key} style={{}}>
          <CateText
            style={{
              color: `${item.color}`,
            }}>
            {item.label}
          </CateText>
        </CateBtn>
      ))}
    </ScrollView>
  )
}

const CateText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`

const CateBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0 20px;
  border-radius: 5px;
`
