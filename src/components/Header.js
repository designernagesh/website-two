import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo-free.png' 

const Header = () => {    
    return(
        <> 
        {/* HEADER */}
      <header role="banner">    
        {/* Top Bar */}
        <div className="top-bar background-white">
          <div className="line">
            <div className="s-12 m-6 l-6">
              <div className="top-bar-contact">
                <p className="text-size-12">Contact Us: 0800 200 200 | <a className="text-orange-hover" href="mailto:contact@sampledomain.com">contact@sampledomain.com</a></p>
              </div>
            </div>
            <div className="s-12 m-6 l-6">
              <div className="right">
                <ul className="top-bar-social right">
                  <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="/"><i class="fab fa-twitter-square"></i></a></li>
                  <li><a href="/"><i class="fab fa-youtube"></i></a></li>
                  <li><a href="/"><i class="fab fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Top Navigation */}
        <nav className="background-white background-primary-hightlight">
          <div className="line">
            <div className="s-12 l-2">
              <a href="index.html" className="logo"><img src={ logo } alt="logoimage" /></a>
            </div>
            <div className="top-nav s-12 l-10">
              <p className="nav-text" />
              <ul className="right chevron">
                <li><NavLink to="/">Home</NavLink></li>                           
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Products">Products</NavLink></li>
                <li><NavLink to="/Gallery">Gallery</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>   
      
        </>
    )
}

export default Header