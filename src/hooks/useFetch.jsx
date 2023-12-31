import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/service'

const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null) 

    useEffect(() => {
        setLoading("loading...")
        setData(null)
        setError(null)

        fetchDataFromApi(url)
            .then( (res) => {
                setLoading(false)
                setData(res)
            })
            .catch((err) => {
                console.log("ERR ~ useFetch: " , err)
                setLoading(false)
                setError("Something went wrong!")
            })
    }, [url])

    return { data, loading, error} // state'leri dışarı dön.
}

export default useFetch