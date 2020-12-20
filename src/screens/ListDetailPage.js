import React, {useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

import {loadingStart, getData} from '../common/listDetail'
import LoadingPage from '../components/Loading/Loading'
import ListDetail from '../components/ListDetail'
import fetchListDetailData from '../util/listDetailApi'

export default function ListDetailPage({route, navigation}) {
  const {loading, data} = useSelector((state) => state.listDetail, shallowEqual)
  const dispatch = useDispatch()

  const {category, genres, title} = route.params

  const pageTitle = {
    popular: '인기 영화',
    now_playing: '현재 상영 중인 영화',
    top_rated: '평점이 높은 영화',
    upcoming: '개봉 예정 영화',
  }

  const fetchDatas = async () => {
    dispatch(loadingStart())
    try {
      let listData = await fetchListDetailData(category)
      listData = listData.data.results.filter((item) => item.overview !== '')
      dispatch(getData(listData))
    } catch (e) {
      console.log(e)
    }
  }

  const fetchGerneData = async () => {
    dispatch(loadingStart())
    try {
      let genreData = {}
      for (let i = 1; i < 3; i++) {
        let result = await fetchListDetailData(category, i)
        result = result.data.results.filter((item) => item.overview !== '')
        genreData[`${i}`] = result
      }
      genreData = genreData[1].concat(genreData[2])

      const result = genreData.map((item) => {
        const genreResult = item.genre_ids.filter((item) =>
          genres.includes(item),
        )
        if (genreResult.length > 0) return item
      })
      genreData = result.filter((item) => item !== undefined).slice(0, 15)
      dispatch(getData(genreData))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (genres) {
      fetchGerneData()
    } else {
      fetchDatas()
    }
  }, [])

  return loading ? (
    <LoadingPage />
  ) : (
    <ListDetail
      data={data}
      navigation={navigation}
      pageTitle={pageTitle}
      category={category}
      title={title}
    />
  )
}
