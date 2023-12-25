import React from 'react'
import '../sass/App.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Hero = () => {
  return (
    <>
   
    <div className='hero_main'> 
    <motion.h1  initial={{opacity:0,scale:.3}} animate={{opacity:1,scale:1}} transition={{duration:1}} class="hero_heading">
      Symphony <br /> of J🍋y in  <br />Every Bite
        </motion.h1>
       <Link to='/MenuCard' style={{textDecoration:'none',margin:0}}><button className='Hero_button' >Order Now</button></Link>
    </div>
    

    </>
  )
}

export default Hero;
