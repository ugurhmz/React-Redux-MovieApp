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

const Carousel = ({data, loading}) => {
    const carouselContainer = useRef()
    const { payloadObject } = useSelector( state => state.home)
    const navigate = useNavigate()

    console.log("payloadObject",payloadObject)
    console.log("data",data)

    const navigationHandle = (type) => {

    }

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
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            ) : 
            
            
            (<span>
                Loading . . .
            </span>)
            
            }

        </ContentWrapper>
    </div>
  )
}

export default Carousel