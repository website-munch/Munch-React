import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Munch</title>
        <meta property="og:title" content="Munch" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">MUNCH</span>
        <img
          alt="image"
          src="/image-removebg-preview-300h.png"
          className="home-image"
        />
        <div className="home-container2">
          <Link to="/" className="home-navlink">
            Home
          </Link>
        </div>
        <div className="home-container3">
          <div className="home-container4">
            <img
              alt="image"
              src="/munch_logo2-200h.png"
              className="home-image1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
