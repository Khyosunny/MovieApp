import React, {useEffect} from 'react'
import Like from '../components/Like'
import {loadingStart, getData} from '../common/like'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import LoadingPage from '../components/Loading/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useIsFocused} from '@react-navigation/native'

export default function LikePage({navigation}) {
  const {loading, data} = useSelector((state) => state.like, shallowEqual)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const fetchData = async () => {
    dispatch(loadingStart())
    let keys = []
    let lists = []
    try {
      keys = await AsyncStorage.getAllKeys()
      const response = keys.filter((item) => Number.isSafeInteger(Number(item)))
      for (let id of response) {
        const result = await AsyncStorage.getItem(id)
        lists.push(JSON.parse(result))
      }
      dispatch(getData(lists))
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchData()
  }, [isFocused])
  return loading ? (
    <LoadingPage />
  ) : (
    <Like data={data} navigation={navigation} />
  )
}
