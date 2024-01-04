import React, { useState } from 'react'

import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import { useFetcher } from 'react-router-dom'
import Carousel from '../../../components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'

const Popular = () => {
 const [endPoint, setEndPoint] = useState("movie")
 const { data , loading} = useFetch(`/${endPoint}/popular`)

 const onTabChange = (tab) => {
  console.log("Popular tab", tab)
  setEndPoint(tab === "Movies" ? "movie" : "tv")
 }

  return (
    <div className="carouselSection">
        <ContentWrapper >
            <span className='carouselTitle'>Popular Contents</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  )
}

export default Popular