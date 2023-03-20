import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home' 
    style={{background: `url(${bannerImage})` }}>
        <div className="headerContainer">
          <h1>Pizza party</h1>
          <p>Pizza to fit any taste</p>
          <Link to='/menu'>
            <button>Order Now</button>
          </Link>
        </div>
    </div>
  )
}

export default Home
