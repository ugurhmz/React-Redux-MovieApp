
import React, { useEffect, useState } from 'react'
import {fetchDataFromApi}  from './utils/service'

const App = () => {
  const [movieArr, setMovieArr] = useState([])

  useEffect(() => {
    
    getPopular()
  }, [])

  const getPopular = () => {
     fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res.results)
        setMovieArr(res.results)
      })
  }

  return (
    <div style={{backgroundColor:"white"}}>  
      { movieArr &&

        movieArr.map( (item,i ) => (
          <div key={i}>{item.original_title}</div>
        ))

      }
     </div>
  )
}

export default App