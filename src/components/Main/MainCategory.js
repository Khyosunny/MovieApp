import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

const type = [
  {
    key: 0,
    label: '액션/판타지',
    color: '#0155db',
    lineColor: '#e2f2ff'
  },
  {
    key: 1,
    label: '공포/스릴러',
    color: '#db1e1e',
    lineColor: '#ffeeee'
    
  },
  {
    key: 2,
    label: '코미디',
    color: '#ffa600',
    lineColor: '#fff1d7'
  },
  {
    key: 3,
    label: '로맨스',
    color: '#ff6b8b',
    lineColor: '#ffeeee'
  },
  {
    key: 4,
    label: '전쟁',
    color: '#1b7979',
    lineColor: '#eefbee'
  },

]

export default function MainCategory() {
  return (
    <ScrollView
      horizontal
      scrollEventThrottle={16}
      snapToInterval={100}
      showsHorizontalScrollIndicator={false}
    >
      {
        type.map((item) => (
          <CateBtn
            key={item.key}
            style={{
              elevation: 3,
              backgroundColor: `${item.color}`,
            }}
          >
            <SmallText
              style={{
                color: `${item.lineColor}`
              }}
            >{item.label}</SmallText>
          </CateBtn>
        ))
      }
      {/* <CateBtn>
        <SmallText>코미디</SmallText>
      </CateBtn>
      <CateBtn>
        <SmallText>공포/스릴러</SmallText>
      </CateBtn>
      <CateBtn>
        <SmallText>로맨스</SmallText>
      </CateBtn>
      <CateBtn>
        <SmallText>전쟁</SmallText>
      </CateBtn> */}
    </ScrollView>
  )
}

const SmallText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;

const CateBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  margin-right: 16px;
  border-radius: 5px;
`;
