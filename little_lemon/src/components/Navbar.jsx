import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Images from '../assets/images/Asset 14@4x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBars,faX } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

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
      
        <motion.img initial={{opacity:0,scale:6}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.5}}  src={Images} alt='logo' className='logo'  /><br />
        
      
  
      {!mobile ? (<>
        <div className='Nav_element'>
          <Link className='nav_list_element' to="/">Home</Link>
          <Link className='nav_list_element' to="/TableB">Booking</Link>
          <Link className='nav_list_element' to="/MenuCard">MenuCard</Link>
          <Link className='nav_list_element' to="/AboutUs">AboutUs</Link>
        </div>
        <Link style={{color:"white"}}className='nav_list_element login_button login_icon ' to="/Login_form">
        Login
      </Link></>
      ) : (
        <>
          {open ? (<>
            <button onClick={()=>toggle()} className='login_button menu_button'  ><FontAwesomeIcon icon={faX}  /></button>

            <div className='Nav_element'>
            <Link className='nav_list_element' to="/Login_form">
            <FontAwesomeIcon icon={faUser} className='login_button login_icon ' />
          </Link>
              <Link className='nav_list_element' to="/">Home</Link>
              <Link className='nav_list_element' to="/TableB">Booking</Link>
              <Link className='nav_list_element' to="/MenuCard">MenuCard</Link>
              <Link className='nav_list_element' to="/AboutUs">AboutUs</Link>
            </div>
            </>
            
            
          ) : (<button onClick={()=>toggle()} className='login_button menu_button'  ><FontAwesomeIcon icon={faBars}  /></button>
          )}
        </>
      )}
  
      
    </div>
  </>
  
      
     
   
    
  )
}

export default Navbar;
