import axios from 'axios'

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
const API_KET = 'a521aac2e9a4e8fd831146e6b22f70c1'
const LANGUAGE = 'ko-KR'

export default async function fetchSearchData(query) {
  if (query === '') return []
  const url = `${SEARCH_URL}?api_key=${API_KET}&language=${LANGUAGE}&query=${query}&include_adult=false`
  const result = await axios.get(url)
  return result
}
