import React from 'react'
import { 
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'

import ContentWrapper from '../contentwrapper/ContentWrapper'
import './style.scss'



const Footer = () => {
  return (
    <footer className='footer'>
        <ContentWrapper>
            <ul className="menuItems">
                <li className="menuItem">Lorem ipsum</li>
                <li className="menuItem">Lorem ipsum</li>
                <li className="menuItem">About</li>
                <li className="menuItem">Blog</li>
                <li className="menuItem">FAQ</li>
            </ul>
            <div className="infoText">
              Lorem ipsum, dolor sit amet
               consectetur adipisicing elit. Quis voluptate exercitationem deleniti eaque, at doloribus quia esse expedita, laborum facilis distinctio, natus aliquid repudiandae dicta libero eum quam dolorem eius!
            </div>
            <div className="socialIcons">
                <span className="icon">
                  <FaFacebookF/>
                </span>
                <span className="icon">
                  <FaInstagram/>
                </span>
                <span className="icon">
                  <FaTwitter/>
                </span>
                <span className="icon">
                  <FaLinkedin/>
                </span>
            </div>
        </ContentWrapper>
    </footer>
  )
}

export default Footer