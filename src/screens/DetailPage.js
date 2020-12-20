import React, {useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import {loadingStart, getData} from '../common/detail'
import LoadingPage from '../components/Loading/Loading'
import Detail from '../components/Detail'
import fetchDetailData from '../util/detailApi'

export default function DetailPage({route, navigation}) {
  const {loading, data} = useSelector((state) => state.detail, shallowEqual)
  const {id} = route.params

  const dispatch = useDispatch()

  const fetchDatas = async (num) => {
    dispatch(loadingStart())
    try {
      const result = await fetchDetailData(num)
      dispatch(getData(result))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchDatas(id)
  }, [])

  if (loading) return <LoadingPage />
  return <Detail data={data} navigation={navigation} />
}
