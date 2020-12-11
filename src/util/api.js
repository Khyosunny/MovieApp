import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const API_KET = 'a521aac2e9a4e8fd831146e6b22f70c1';
const LANGUAGE = 'ko-KR';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'a521aac2e9a4e8fd831146e6b22f70c1',
    language: 'ko-KR'
  }
});

export const fetchData = async (lists) => {
  if(!lists || !Array.isArray(lists)) return null
  let obj = {};
  for (let movie of lists) {
    const result = await api.get(`${movie}`)
    obj[`${movie}`] = result.data.results
  }
  return obj
}

