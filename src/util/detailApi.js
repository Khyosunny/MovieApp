import {api} from './api'

async function fetchDetail(id) {
  let data = {}
  try {
    const result = await api.get(`${id}`)
    let genre = result.data.genres.map((item) => item.name)
    genre = genre.join('/')
    data.genre = genre
    data.title = result.data.title
    data.vote_average = result.data.vote_average
    data.poster_path = result.data.poster_path
    data.backdrop_path = result.data.backdrop_path
    data.release_date = result.data.release_date
  } catch (e) {
    console.log(e)
  }
  console.log('api', data)
  return data
}
// function fetchImg(id) {
//   let data = {}
//   const result = await api.get(`${id}`)
//   let genre = result.data.genres.map((item) => item.name)
//   genre = genre.join('/')
//   data.genre = genre
//   data.title = result.data.title
//   return data
// }
export default async function fetchData(id) {
  let data = {}
  const detail = await fetchDetail(id)
  data.detail = detail
  return data
}
