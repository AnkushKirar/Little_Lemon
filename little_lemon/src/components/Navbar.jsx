import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../assets/images/Asset 9@4x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
     <div className='navbar'> 
     <div className='logo_section'>

      <img src={Images} alt='' className='logo'/><br/>
      <h1>Little <br />Lemon</h1></div>


      


      
        <div className='Nav_element'>
          <Link className='nav_list_element'  to="/" >Home</Link>
          <Link className='nav_list_element'  to="/TableB">Booking</Link>
          <Link className='nav_list_element'  to="/MenuCard">MenuCard</Link>
          <Link className='nav_list_element'  to="/AboutUs">AboutUs</Link>
        </div>
        <FontAwesomeIcon icon={faUser}  className='login_button'/>
        </div> 
        </>
      
     
   
    
  )
}

export default Navbar
