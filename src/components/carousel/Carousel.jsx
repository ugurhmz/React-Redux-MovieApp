import React, { useEffect, useRef } from "react";
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
import Genres from "../genres/Genres";

const Carousel = ({ data, loading , endPoint, title}) => {
    const carouselContainer = useRef(0);
    const { payloadObject } = useSelector( state => state.home)
    const navigate = useNavigate()

   
    useEffect(() => {
        console.log("DEBGGcarouselContainer", carouselContainer.current); // Debug amaçlı
    }, []);

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
    const scrollingButton = (type) => {
        const container = carouselContainer.current;
        if (container) {
            const scrollAmount = 
            type === "left"
                    ? container.scrollLeft - (container.offsetWidth + 20)
                    : container.scrollLeft + (container.offsetWidth + 20);
    
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    }
    
  return (
    <div className="carousel">
        <ContentWrapper>
            {title && <div className="carouselTitle"> {title} </div>}
            <BsFillArrowLeftCircleFill 
                className="carouselLeftNav arrow"
                onClick={() => scrollingButton("left")}
            />
            <BsFillArrowRightCircleFill 
                className="carouselRighttNav arrow"
                onClick={() => scrollingButton("right")}
            />

            { !loading ? (
                <div className="carouselItems" ref={carouselContainer}>
                    {
                        data?.map( (item) => {
                            const posterURL = item.poster_path ? payloadObject.poster + item.poster_path : ""
                            return (
                                <div key={item.id} 
                                className="carouselItem" 
                                onClick={ () => navigate(`/${item.media_type || endPoint}/${item.id}`)}
                                >
                                    <div className="posterBlock">
                                        <Img src={posterURL}/>
                                        <CircleRating rating={item.vote_average.toFixed(1)}/>
                                        <Genres data={item.genre_ids.slice(0,2)} />
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