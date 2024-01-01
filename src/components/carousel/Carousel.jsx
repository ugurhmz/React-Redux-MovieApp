import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import dayjs from "dayjs"
import './style.scss'
import ContentWrapper from "../contentwrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img"
import CircleRating from "../circleRating/CircleRating";

const Carousel = ({data, loading}) => {
    const carouselContainer = useRef()
    const { payloadObject } = useSelector( state => state.home)
    const navigate = useNavigate()

    const skItem = () => {
        return (
            <div className="skeletonItem">
                    <div className="posterBlock skeleton"></div>
                    <div className="textBlock">
                        <div className="title skeleton"></div>
                        <div className="data skeleton"></div>
                    </div>
            </div>
        )
    }

    const navigationHandle = (type) => {}

  return (
    <div className="carousel">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill 
                className="carouselLeftNav arrow"
                onClick={navigationHandle("left")}
            />
            <BsFillArrowRightCircleFill 
                className="carouselRighttNav arrow"
                onClick={navigationHandle("right")}
            />

            { !loading ? (
                <div className="carouselItems">
                    {
                        data?.map( (item) => {
                            const posterURL = item.poster_path ? payloadObject.poster + item.poster_path : ""
                            return (
                                <div key={item.id} className="carouselItem">
                                    <div className="posterBlock">
                                        <Img src={posterURL}/>
                                        <CircleRating rating={item.vote_average.toFixed(1)}/>
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            { item.title || item.name}
                                        </span>
                                        <span className="date">
                                            { 
                                                dayjs(item.release_Date).format("MMM D, YYYY")
                                            }
                                        </span>
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>

            ) : 
            
            
            (
                <div className="loadingSkeleton">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                </div>
            )
            
            }

        </ContentWrapper>
    </div>
  )
}

export default Carousel