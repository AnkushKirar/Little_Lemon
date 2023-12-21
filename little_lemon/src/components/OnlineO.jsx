import React from 'react'
import image from '../assets/images/Asset 14@4x.png'
import { Link } from 'react-router-dom'
const OnlineO = () => {
  return (
    <div className='grid_container'>
      <h2>Recipt</h2>

     <div className='Online_section'>
       <img src = {image} href = "logo" className = 'img'/>

       <div className='Online_main'>
       <p className='Online_element' >Order Id: 324431</p>
       <p className='Online_element' >Name:Ankush Yadav</p>
       <p className='Online_element' >Email:ankush@.com</p>
       <p className='Online_element' >Date:15/01/2024</p>
       <p className='Online_element' >Time:10:30PM</p>
       <p className='Online_element' >Number of People : 5</p>
       </div>
       <div className='Online_button_div'>
       <Link to = "/TableB"   className='Link' ><button  className='Online_button' style={{backgroundColor:'red'}} >Reset</button></Link>
       <button  className='Online_button' style={{backgroundColor:'green'}} >Submit</button>
       </div>

      </div>
    </div>
      
    
  )
}

export default OnlineO
