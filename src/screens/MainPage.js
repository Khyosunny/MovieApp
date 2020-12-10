import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { loadingStart, getData } from '../common/main';

import LoadingPage from '../components/Loading/Loading';
import Main from '../components/Main/Main';
import api from '../util/api';

export default function MainPage({ route, navigation }) {
  const { loading, data } = useSelector(state => state.main, shallowEqual)
  const dispatch = useDispatch();

  const [randomItem, setRandomItem] = useState('');


  
  const fetchData = async () => {
    dispatch(loadingStart());
    try {
      let result = await api.get('movie/popular');
      result = result.data.results.slice(0, 10)
      randomData();
      dispatch(getData(result));
    } catch (e) {
      console.log(e)
    }
  }

  const randomData = () => {
    const getOverviewFilter = data.filter(item => {
      return (
        item.overview !== ''
      )
    })
    let random = getOverviewFilter[Math.floor(Math.random() * getOverviewFilter.length)]
    setRandomItem(random)
  }
  
  useEffect(() => {
    fetchData();
    console.log(route)
  }, [])


  return loading ? <LoadingPage /> : <Main data={data} randomItem={randomItem} navigation={navigation}/>
  
}