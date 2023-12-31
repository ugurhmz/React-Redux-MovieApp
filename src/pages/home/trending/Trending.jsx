import React from 'react'

import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import './style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'


const Trending = () => {


  const tabChanged = (tab) => {

  }

  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={["Day", "Week"]} tabChanged={tabChanged}/>
        </ContentWrapper>
    </div>
  )
}

export default Trending