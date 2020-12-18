import {api} from './api'

const IMG_URL = 'https://image.tmdb.org/t/p/original'

async function fetchPopular() {
  let data = {}
  try {
    const result = await api.get('popular')
    data = result.data.results
      .filter((item) => item.overview !== '')
      .slice(0, 8)
  } catch (e) {
    console.log(e)
  }
  return data
}

async function fetchNowPlaying() {
  let data = {}
  try {
    const result = await api.get('now_playing')
    data = result.data.results
      .filter((item) => item.overview !== '')
      .slice(0, 8)
  } catch (e) {
    console.log(e)
  }
  return data
}

async function fetchUpcoming() {
  let data = {}
  try {
    const result = await api.get('upcoming')
    data = result.data.results
      .filter((item) => item.overview !== '')
      .slice(0, 8)
  } catch (e) {
    console.log(e)
  }
  return data
}

async function fetchTopRated() {
  let data = {}
  try {
    const result = await api.get('top_rated')
    data = result.data.results
      .filter((item) => item.overview !== '')
      .slice(0, 8)
  } catch (e) {
    console.log(e)
  }
  return data
}

export default async function fetchListData() {
  let data = {}
  const popular = await fetchPopular()
  const nowplaying = await fetchNowPlaying()
  const upcoming = await fetchUpcoming()
  const toprated = await fetchTopRated()
  data.popular = popular
  data.nowplaying = nowplaying
  data.upcoming = upcoming
  data.toprated = toprated
  return data
}
