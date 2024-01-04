import React from 'react'

import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import './style.scss'

const DetailsBanner = ({ video, crew }) => {

    const { mediaType, id } = useParams()
    const {data, loading } = useFetch(`/${mediaType}/${id}`)
    const { payloadObject } = useSelector( (state) => state.home)

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
                        <div className='opacity-layer'></div>
                    </div>
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