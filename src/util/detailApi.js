import {api} from './api'

const IMG_URL = 'https://image.tmdb.org/t/p/original'

async function fetchDetail(id) {
  let data = {}
  try {
    const result = await api.get(`${id}`)
    let genre = result.data.genres.map((item) => item.name)
    if (genre.length > 3) {
      genre = genre.slice(0, 3)
    }
    genre = genre.join('/')
    data.genre = genre
    data.title = result.data.title
    data.vote_average = result.data.vote_average
    data.poster_path = `${IMG_URL}${result.data.poster_path}`
    data.backdrop_path = `${IMG_URL}${result.data.backdrop_path}`
    data.release_date = result.data.release_date
    data.runtime = result.data.runtime
    data.overview = result.data.overview
    data.id = result.data.id
  } catch (e) {
    console.log(e)
  }
  return data
}
async function fetchCredits(id) {
  let data = {}
  try {
    const result = await api.get(`${id}/credits`)
    data = result.data.cast.slice(0, 6)
  } catch (e) {
    console.log(e)
  }
  return data
}
async function fetchSimilarMovie(id) {
  let data = {}
  try {
    const result = await api.get(`${id}/similar`)
    data = result.data.results
      .filter(
        (item) =>
          item.backdrop_path !== null &&
          item.overview !== '' &&
          item.poster_path !== null,
      )
      .slice(0, 3)
  } catch (e) {
    console.log(e)
  }
  return data
}

export default async function fetchData(id) {
  let data = {}
  const detail = await fetchDetail(id)
  const credits = await fetchCredits(id)
  const similarMovie = await fetchSimilarMovie(id)
  data.detail = detail
  data.credits = credits
  data.similarMovie = similarMovie
  console.log(data)
  return data
}
