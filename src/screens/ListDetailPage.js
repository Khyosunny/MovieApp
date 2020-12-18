import React, {useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import {loadingStart, getData} from '../common/listDetail'
import LoadingPage from '../components/Loading/Loading'
import ListDetail from '../components/ListDetail'
import {api} from '../util/api'

export default function ListDetailPage({route, navigation}) {
  const {loading, data} = useSelector((state) => state.listDetail, shallowEqual)
  const dispatch = useDispatch()

  const {category} = route.params
  console.log(category)

  const pageTitle = {
    popular: '인기 영화',
    now_playing: '현재 상영 중인 영화',
    top_rated: '평점이 높은 영화',
    upcoming: '개봉 예정 영화',
  }

  const fetchDatas = async () => {
    dispatch(loadingStart())
    try {
      let result = await api.get(category)
      result = result.data.results.filter((item) => item.overview !== '')
      dispatch(getData(result))
      console.log('result', result)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchDatas()
  }, [])

  return loading ? (
    <LoadingPage />
  ) : (
    <ListDetail
      data={data}
      navigation={navigation}
      pageTitle={pageTitle}
      category={category}
    />
  )
}
