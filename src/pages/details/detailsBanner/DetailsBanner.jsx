import React from 'react'

import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'

const DetailsBanner = ({ video, crew }) => {

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : "" }`
    }


  return (
    <div className='detailsBanner'>
        { !loading ? (
            <div>Details content</div>
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