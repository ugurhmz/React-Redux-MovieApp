
import React, { useEffect, useState } from 'react'
import {fetchDataFromApi}  from './utils/service'
import { useDispatch } from 'react-redux'
import { getApiConfiguration } from './redux/homeSlice'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = () => {
     fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res)
        dispatch(getApiConfiguration(res))
      })
  }

  return (
    <div style={{backgroundColor:"white"}}>  
     </div>
  )
}

export default App