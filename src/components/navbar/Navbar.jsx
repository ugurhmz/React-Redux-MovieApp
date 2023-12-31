import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineSearch} from 'react-icons/hi'
import { SlMenu} from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import './style.scss'
import logo from '../../assets/logo23.webp'
import ContentWrapper from '../contentwrapper/ContentWrapper'


const Navbar = () => {
  const [show, setShow] = useState("top")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [query, setQuery] = useState("")
  const [showSearch, setShowSearch] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }

  const openMobileMenu = () =>  {
      setMobileMenu(true)
      setShowSearch(false)
  }




  return (
    <header className={`header ${mobileMenu ? "mobileView" :""} ${show}`}>
      <ContentWrapper>
          <div className="logo">
            <img  src={logo} alt="" />
          </div>

          <ul className="menuItems">
            <li className="menuItem">Movies</li>
            <li className="menuItem">TV Shows</li>
            <li className="menuItem">
                <HiOutlineSearch/>
            </li>
          </ul>

          <div className="mobileMenuItems">
              <HiOutlineSearch/>
              {
                mobileMenu ? (
                  <VscChromeClose onClick={ () => setMobileMenu(false)}/> 
                ) : (
                  <SlMenu onClick={openMobileMenu}/>)
              }

          </div>

      </ContentWrapper>
    </header>
  )
}

export default Navbar