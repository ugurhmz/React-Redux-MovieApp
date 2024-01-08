import React from 'react'
import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import { useSelector } from 'react-redux';
import './style.scss'
import Img from '../../../components/lazyLoadImage/Img';

const Cast = ({data, loading}) => {

 const {payloadObject} = useSelector((state) => state.home)

 const skeleton = () => {
    return (
        <div className="skItem">
            <div className="circle skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row2 skeleton"></div>
        </div>
    );
 };

  return (
    <div className='castSection'>
        <ContentWrapper>
            <div className="sectionHeading">Top Cast</div>
            {
                !loading ?  (
                    <div className="listItems">
                        {
                            data?.map( (item) => {
                                let imgUrl = item.profile_path ? payloadObject.profile + item.profile_path : ""
                                return (
                                    <div  key={item.id}  className="listItem">
                                        <div className="profileImg">
                                            <Img src={imgUrl} />
                                        </div>
                                        <div className="name">
                                            {item.name}
                                        </div>
                                        <div className="character">
                                            {item.character}
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )
            }
        </ContentWrapper>
    </div>
  )
}

export default Cast