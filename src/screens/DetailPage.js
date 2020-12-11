import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { loadingStart, getData } from '../common/datail';

import LoadingPage from '../components/Loading/Loading';
import Detail from '../components/Detail/Detail';
import api from '../util/api';


export default function DetailPage({ route, navigation }) {
  const { loading, data } = useSelector(state => state.detail, shallowEqual)
  const { id } = route.params

  console.log('아뒤', id)
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(loadingStart());
    try {
      const result = await api.get(`movie/${id}`);
      console.log(result.data)
      dispatch(getData(result.data));
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  return (
    loading ? <LoadingPage /> : <Detail data={data}/>
  )
}