
import React, { useEffect, useState } from 'react'
import {fetchDataFromApi}  from './utils/service'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './redux/homeSlice'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import PageNotFound from './pages/404/404'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchResult/SearchResult'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'



const App = () => {
  const dispatch = useDispatch()
  const {payloadObject} = useSelector(state => state.home)
 
  console.log("xxx",payloadObject)

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = () => {
     fetchDataFromApi("/movie/popular")
      .then((res) => {
        dispatch(getApiConfiguration(res))
      })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App