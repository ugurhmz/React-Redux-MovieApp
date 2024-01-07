import React from 'react'

import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import './style.scss'
import dayjs from "dayjs"
import Genres from '../../../components/genres/Genres'
import CircleRating from '../../../components/circleRating/CircleRating'
import PlayIcon from '../PlayBtn'


const DetailsBanner = ({ video, crew }) => {

    const { mediaType, id } = useParams()
    const {data, loading } = useFetch(`/${mediaType}/${id}`)
    const { payloadObject } = useSelector( (state) => state.home)
    const _genres = data?.genres?.map( (item) => item.id)

    console.log("payloadObject", payloadObject)
    console.log("Banner data", data)
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : "" }`
    }

  return (
    <div className='detailsBanner'>
        { !loading ? (
           <>
            { !!data && (
                <React.Fragment>
                    <div className="backdrop-img">
                        <Img src={payloadObject.backdrop + data.backdrop_path} />
                        
                    </div>
                    <div className='opacity-layer'></div>
                    <ContentWrapper>
                        <div className="content">
                            <div className="left">
                                { data.poster_path ? (
                                    <Img className="posterImg" src={payloadObject.backdrop + data.poster_path } />
                                ) : (
                                    <Img className="posterImg" src="" /> )
                                }
                            </div>

                            <div className="right">
                                <div className="title">
                                    {`${data.name || data.title} (${dayjs(data?.release_date).format("YYYY")})`}
                                </div>
                                <div className="subtitle">
                                    { data.tagline }
                                </div>

                                <Genres data={_genres}/>

                                <div className="row">
                                    <CircleRating rating={data.vote_average.toFixed(1)}  />
                                    <div className="playbtn" >
                                        <PlayIcon />
                                        <span className='text'>
                                            Watch trailer
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="overview">
                                    <div className="heading">
                                        Overview
                                    </div>

                                    <div className="description">
                                        { data?.overview}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ContentWrapper>
                </React.Fragment>
            )
            }
           </>
        ) : 
            (
                <div className='detailsBannerSkeleton'>
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )
        }
    </div>
  )
}

export default DetailsBanner