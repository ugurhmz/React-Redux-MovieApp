
import React, { useEffect } from 'react'
import {fetchDataFromApi}  from './utils/service'

const App = () => {

  useEffect(() => {
      
    getPopular()
  }, [])

  const getPopular = () => {
     fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res.results)
      })
  }

  return (
    <div style={{backgroundColor:"white"}}>  
    Lorem
     </div>
  )
}

export default App