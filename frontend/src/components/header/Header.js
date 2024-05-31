import React from 'react'
import "../header/Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div class="headerLeft">
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className='header_icon' alt="" />
            </Link>
            <Link to='/movies/upcoming' style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            <Link to='/movies/popular'  style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to='/movies/top_rated'style={{textDecoration:"none"}}><span>Top Rated</span></Link>
           
        </div>
      
    </div>
  )
}

export default Header
