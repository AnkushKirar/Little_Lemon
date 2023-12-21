import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Images from '../assets/images/Asset 9@4x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [mobile ,setMobile] = useState(window.innerWidth<675);
  const [open ,setOPen] = useState(false)
 
  const toggle = ()=>{
    setOPen(!open)
  }
  useEffect(()=>{
   const handleclick = ()=>{
    setMobile(window.innerWidth<675)
    if(window.innerWidth >= 675){
      setOPen(false)
    }
   }
   window.addEventListener('resize',handleclick)
   return ()=>{ window.removeEventListener("resize",handleclick)};

  },[]);
  
  return (
    <>
    <div className='navbar'>
      <div className='logo_section'>
        <img src={Images} alt='' className='logo' /><br />
        <h1>Little <br />Lemon</h1>
      </div>
  
      {!mobile ? (<>
        <div className='Nav_element'>
          <Link className='nav_list_element' to="/">Home</Link>
          <Link className='nav_list_element' to="/TableB">Booking</Link>
          <Link className='nav_list_element' to="/MenuCard">MenuCard</Link>
          <Link className='nav_list_element' to="/AboutUs">AboutUs</Link>
        </div>
        <Link className='nav_list_element' to="/Login_form">
        <FontAwesomeIcon icon={faUser} className='login_button login_icon ' />
      </Link></>
      ) : (
        <>
           <button onClick={()=>toggle()} className='login_button menu_button'  ><FontAwesomeIcon icon={faBars}  /></button>
          {open ? (
            <div className='Nav_element'>
            <Link className='nav_list_element' to="/Login_form">
            <FontAwesomeIcon icon={faUser} className='login_button login_icon ' />
          </Link>
              <Link className='nav_list_element' to="/">Home</Link>
              <Link className='nav_list_element' to="/TableB">Booking</Link>
              <Link className='nav_list_element' to="/MenuCard">MenuCard</Link>
              <Link className='nav_list_element' to="/AboutUs">AboutUs</Link>
            </div>
            
            
          ) : (null)}
        </>
      )}
  
      
    </div>
  </>
  
      
     
   
    
  )
}

export default Navbar;
