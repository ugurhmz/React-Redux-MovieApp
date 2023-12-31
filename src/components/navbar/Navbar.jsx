import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import "./style.scss";
import logo from "../../assets/logo23.webp";
import ContentWrapper from "../contentwrapper/ContentWrapper";

const Navbar = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    console.log("LOCATION worked")
    window.scrollTo(0,0)
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200){
        if(window.scrollY> lastScrollY && !mobileMenu){
            setShow("hide")
        } else {
          setShow("show")
        }
    } else {
      setShow("top")
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        console.log("REMOVE WORKED USEEFFECT")
        window.removeEventListener("scroll", controlNavbar)
      }
  }, [lastScrollY])


  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
    setTimeout(() => {
      setShowSearch(false);
    }, 15000);
  };

  const navigationHandler = (type) => {
    console.log(type)
    if (type === 'movie') {
        navigate("/explore/movie")
    } else if(type === 'tv') {
       navigate("/explore/tv")
    }
    setMobileMenu(false)
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" />
        </div>

        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        {/* for mobile */}
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>

        {/*searchBar item*/}
        {showSearch && (
          <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for a movie or TV Shows. . . "
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={searchQueryHandle}
                />
                <VscChromeClose onClick={() => setShowSearch(false)} />
              </div>
            </ContentWrapper>
          </div>
        )}
      </ContentWrapper>
    </header>
  );
};

export default Navbar;
