import React, {useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import {loadingStart, getData} from '../common/datail'
import LoadingPage from '../components/Loading/Loading'
import Detail from '../components/Detail/Detail'
import fetchData from '../util/detailApi'

export default function DetailPage({route, navigation}) {
  const {loading, data} = useSelector((state) => state.detail, shallowEqual)

  console.log('page', data)
  const {id} = route.params

  console.log('아뒤', id)
  const dispatch = useDispatch()

  const fetchDatas = async () => {
    dispatch(loadingStart())
    try {
      const result = await fetchData(`${id}`)
      dispatch(getData(result))
    } catch (e) {
      console.log(e)
    }
  }

  // let genre = data.genres.map((item) => item.name)
  // genre = genre.join('/')

  useEffect(() => {
    fetchDatas()
  }, [])

  return loading ? <LoadingPage /> : <Detail data={data} />
}
