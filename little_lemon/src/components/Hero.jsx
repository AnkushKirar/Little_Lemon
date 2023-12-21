import React from 'react'
import '../sass/App.scss'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <>
    <div className='hero_main'> 
       <Link to='/TableB' style={{textDecoration:'none'}}><button className='Hero_Section' >For Table Booking Click Here</button></Link>
       <Link to='/MenuCard' style={{textDecoration:'none'}}><button className='Hero_Section' >Order Now</button></Link>
    </div>
    </>
  )
}

export default Hero;
