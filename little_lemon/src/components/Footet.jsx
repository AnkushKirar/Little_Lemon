import React from 'react'
import Image from '../assets/images/Asset 18@4x.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub,  faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin, faGithub,  faTwitter);


const Footet = () => {
  return (
    <>
    <div className='Footer'>
      
       <div className='footer_image'>
        <img className='footer_img' src={Image} alt="logo" />

       </div>
       <div className='footer_icon'>
       <ul className={`footer_list`}>
        <li><a href="https://www.linkedin.com/in/ankush-yadav-53b798215/" className= "footer_element" ><FontAwesomeIcon icon={faLinkedin} size="2xs" /></a></li><br /><br />          
          <li><a href="https://github.com/AnkushKirar"  className= "footer_element" ><FontAwesomeIcon icon={faGithub} size="2xs" /></a></li><br /><br />          
          <li><a href="https://www.coursera.org/user/dc216bffa011574062acf601573c3220" className= "footer_element"><FontAwesomeIcon icon={faTwitter} size="2xs" /></a></li><br /><br />          
        </ul>

       </div>

  
      </div>
      <div className='footer_copyright'>
        <h5>Little Limen @ 2023</h5>
      </div>
      </>
    
  )
}

export default Footet
