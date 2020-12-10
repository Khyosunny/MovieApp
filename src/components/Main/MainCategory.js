import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

const type = [
  {
    key: 0,
    label: '액션/판타지',
    lineColor: '#1293e9',
    color: '#e2f2ff'
  },
  {
    key: 1,
    label: '공포/스릴러',
    lineColor: '#db1e1e',
    color: '#ffeeee'
    
  },
  {
    key: 2,
    label: '코미디',
    lineColor: '#ff8800',
    color: '#fff1d7'
  },
  {
    key: 3,
    label: '로맨스',
    lineColor: '#fd5378',
    color: '#ffeeee'
  },
  {
    key: 4,
    label: '전쟁',
    lineColor: '#179217',
    color: '#eefbee'
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
        type.map((item) => {
          return (
            <CateBtn
              style={{
                elevation: 3,
                backgroundColor: `${item.color}`,
                borderColor: `${item.lineColor}`,
                borderWidth: 2
              }}
            >
              <SmallText
                style={{
                  color: `${item.lineColor}`
                }}
                key={item.key}>{item.label}</SmallText>
            </CateBtn>
          )})
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
