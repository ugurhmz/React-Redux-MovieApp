import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../../utils/service'
import Spinner from '../../components/spinner/Spinner'
import ContentWrapper from '../../components/contentwrapper/ContentWrapper'
import './style.scss'

const SearchResult = () => {

  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const { query } = useParams()


  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then( (res) => {
        console.log("searchres",res )
        setData(res)
        setPageNum( ( prev) => prev + 1)
        setLoading(false)
      })
  }

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then( (res) => {
        if(data.results){
          console.log("...data",...data)
          setData({
            ...data,
            results:[...data?.results, ...res.results]
          })
        } else {
          setData(res)
        }

        setPageNum( (prev) => prev + 1)
      })
  }

  useEffect( () => {
    fetchInitialData()
  }, [query])



  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true}/>}
      { !loading && (
        <ContentWrapper>
          { data?.results.length > 0 ? (
            <>
              <div className="pageTitle">
                { `Search ${data?.total_results > 1   ? "results" : "result"} of '${query}'`}

              </div>
            </>
          ) : (
            <span className="resultNotFound">
              Sorry, Result not found !!
            </span>
          )

          }
        </ContentWrapper>
        )
      }
    </div>
  )
}

export default SearchResult