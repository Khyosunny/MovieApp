import React, {useEffect, useState} from 'react'
import Search from '../components/Search'
import fetchSearchData from '../util/searchApi'

export default function SearchPage({navigation}) {
  const [getQuery, setGetQuery] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  const fetchData = async () => {
    try {
      const result = await fetchSearchData(searchValue)
      setGetQuery(result.data.results)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (searchValue === '') {
      setGetQuery(null)
    } else {
      fetchData()
    }
  }, [searchValue])

  useEffect(() => {
    return () => {
      setSearchValue('')
      setGetQuery(null)
    }
  }, [])
  return (
    <Search
      fetchData={fetchData}
      navigation={navigation}
      getQuery={getQuery}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  )
}
