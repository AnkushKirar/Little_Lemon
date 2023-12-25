import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <div className='about-us'>
    <h1>About Us</h1>
    <h5>Welcome to Lemon Delights – a Culinary Symphony of Zest and Flavor!</h5>
    <motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >At Lemon Delights, we believe that every dining experience should be a delightful journey of taste and ambiance. Nestled in the heart of [City], Lemon Delights brings you a unique blend of culinary expertise and a vibrant atmosphere, ensuring your every visit is an unforgettable celebration of flavors. </motion.p>

<motion.h6  initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}}>Our Story:</motion.h6>
<motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >Lemon Delights is more than just a restaurant; it's a culinary haven inspired by the zestiness of lemons and the joy they bring. Our journey began with a passion for crafting extraordinary dishes that elevate your dining experience. From the moment you step in, you are embraced by the warmth of our ambiance and the tantalizing aroma of our carefully curated menu.</motion.p>

<motion.h6  initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}}>The Lemon Philosophy:</motion.h6>
<motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >At Lemon Delights, we are committed to the highest standards of quality and freshness. Our chefs meticulously select the finest ingredients, infusing each dish with a burst of natural flavors. From the tangy citrus notes to the savory delights, our menu is a symphony of tastes designed to tantalize your palate.</motion.p>

<motion.h6  initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}}>Chef's Signature Creations:</motion.h6>
<motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >Indulge in a culinary adventure with our Chef's Signature Creations. From the Lemon-infused Seafood Platter to the Zesty Grilled Chicken, each dish is a masterpiece crafted with love and precision. Our menu caters to diverse tastes, ensuring there's something extraordinary for every discerning palate.</motion.p>

<motion.h6  initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}}>The Lemon Experience:</motion.h6>
<motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >Lemon Delights is not just a restaurant; it's an experience. Whether you're savoring a romantic dinner for two or hosting a special celebration, our attentive staff and inviting atmosphere set the stage for memorable moments. Unwind with handcrafted cocktails at our vibrant bar or relish a leisurely Sunday brunch with family and friends.</motion.p>

<motion.h6  initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}}>Commitment to Sustainability:</motion.h6>
<motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >As stewards of the environment, we embrace sustainable practices. From sourcing local ingredients to minimizing waste, Lemon Delights is dedicated to reducing our ecological footprint while offering you a guilt-free indulgence.</motion.p>

<motion.h6  initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}}>Join Us at Lemon Delights:</motion.h6>
<motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >Come, be a part of the Lemon Delights family, where every dish tells a story, and every moment is savored. Whether you're a food enthusiast, a couple seeking a romantic escape, or a family creating lasting memories, Lemon Delights welcomes you to a world of culinary excellence.</motion.p>

<motion.p initial={{opacity:0,scale:.01}} whileInView={{opacity:1,scale:1}} transition={{duration: 1}} >Indulge, savor, and create memories at Lemon Delights – Where Zest Meets Elegance!</motion.p>
    </div>
  )
}

export default AboutUs
