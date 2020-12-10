import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/movie/';
// const API_KET = 'a521aac2e9a4e8fd831146e6b22f70c1';
// const LANGUAGE = 'ko-KR';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a521aac2e9a4e8fd831146e6b22f70c1',
    language: 'ko-KR'
  }
});
export default api;