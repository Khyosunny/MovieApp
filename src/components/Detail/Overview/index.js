import React, {useState, useCallback} from 'react'
import {Text} from 'react-native'
import MoreIcon from 'react-native-vector-icons/MaterialIcons'
import SubTitle from '../SubTitle'

import styled from 'styled-components'

export default function Overview({overview}) {
  const [showMoreButton, setShowMoreButton] = useState(false)
  const [numOfLine, setNumOfLine] = useState(5)

  const onShowMore = useCallback(() => {
    setNumOfLine(100)
  }, [])

  const onTextLayout = useCallback(
    (e) => {
      setShowMoreButton(e.nativeEvent.lines.length > numOfLine)
    },
    [numOfLine],
  )

  return (
    <Container>
      <SubTitle title="줄거리" />

      {overview ? (
        <OverviewText numberOfLines={numOfLine} onTextLayout={onTextLayout}>
          {overview}
        </OverviewText>
      ) : (
        <EmptyOverviewText>줄거리 정보가 없습니다.</EmptyOverviewText>
      )}

      {showMoreButton && (
        <ShowMoreButton onPress={onShowMore}>
          <Row>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: '#8375ff',
              }}>
              더보기
            </Text>
            <MoreIcon name="expand-more" size={20} color="#8375ff" />
          </Row>
        </ShowMoreButton>
      )}
    </Container>
  )
}

const Row = styled.View`
  flex-direction: row;
`

const ShowMoreButton = styled.TouchableOpacity`
  align-self: center;
  padding: 10px;
`
const EmptyOverviewText = styled.Text`
  margin: 20px 0;
  align-self: center;
  font-size: 16px;
  color: #c5c5c5;
`

const OverviewText = styled.Text`
  font-size: 14px;
  color: #c5c5c5;
`
const Container = styled.View`
  margin: 0 10px;
`
