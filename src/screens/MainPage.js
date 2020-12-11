import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { loadingStart, getData } from '../common/main';

import LoadingPage from '../components/Loading/Loading';
import Main from '../components/Main/Main';
import api from '../util/api';

export default function MainPage({ navigation }) {
  const { loading, popularMovieList, nowMovieList } = useSelector(state => state.main, shallowEqual)
  const dispatch = useDispatch();
  
  const fetchData = async () => {
    dispatch(loadingStart());
    try {
      let popular = await api.get('movie/popular');
      popular = popular.data.results.slice(0, 10);
      console.log('인기', popular)
      let nowPlaying = await api.get('movie/now_playing');
      nowPlaying = nowPlaying.data.results.slice(0, 5);
      console.log('현재ㅐㅐ', nowPlaying)
      dispatch(getData(popular, nowPlaying));
    } catch (e) {
      console.log(e)
    }
  }

  
  useEffect(() => {
    fetchData();
  }, [])


  return loading ? <LoadingPage /> : <Main popularMovieList={popularMovieList} nowMovieList={nowMovieList}navigation={navigation}/>
  
}