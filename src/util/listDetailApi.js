import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KET = 'a521aac2e9a4e8fd831146e6b22f70c1'
const LANGUAGE = 'ko-KR'

function getUrl(path, num = 1) {
  let url = `${BASE_URL}${path}?api_key=${API_KET}&language=${LANGUAGE}&page=${num}`
  return url
}

export default async function fetchListDetailData(path, num) {
  const url = getUrl(path, num)
  const result = await axios.get(url)
  return result
}
