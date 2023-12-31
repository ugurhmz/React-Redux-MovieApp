import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineSearch} from 'react-icons/hi'
import { SlMenu} from 'react-icons/sl'
import { VscChromeClose } from 'react-icons/vsc'
import { useNavigate, useLocation } from 'react-router-dom'

import './style.scss'

import ContentWrapper from '../contentwrapper/ContentWrapper'


const Navbar = () => {
  const [show, setShow] = useState("top")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [query, setQuery] = useState("")
  const [showSearch, setShowSearch] = useState("")
  const navigate = useNavigate()
  const location = useLocation()


  return (
    <div>Header</div>
  )
}

export default Navbar