import React, {useEffect} from 'react'
import {loadingStart, getData} from '../common/list'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import LoadingPage from '../components/Loading/Loading'
import List from '../components/List'
import fetchListData from '../util/listApi'

export default function ListPage({navigation}) {
  const {loading, data} = useSelector((state) => state.list, shallowEqual)
  const dispatch = useDispatch()

  const fetchDatas = async () => {
    dispatch(loadingStart())
    try {
      const result = await fetchListData()
      dispatch(getData(result))
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
    <List data={data} navigation={navigation} />
  )
}
