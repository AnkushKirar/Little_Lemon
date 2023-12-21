import React from 'react'
import image from '../assets/images/Asset 14@4x.png'

import { Link } from 'react-router-dom'

const TableB = () => {
 
  
  return (
    <div className='grid_container'>
      <h2>Table Booking</h2>

    <div className='hero_section'>
    <img src = {image} href = "logo" className = 'img'/>
      
      <div className='Input_field' id='input_name' >
       <label htmlFor="Name">Name:</label><br />
       <input type="text" id='Name' placeholder='Ram singh' />
      </div>
     <div className='Input_field' id='email_name' >
       <label htmlFor="Email">Email:</label><br />
       <input type="email" id='Email' placeholder='example@.com' />
     </div>
     <div className='Input_field'id='date' >
       <label htmlFor="date">Date:</label><br />
       <input type="date" id='date' placeholder='dd/mm/yyyy' />
      </div>
      <div className='Input_field' id='Time' >
       <label htmlFor="time">Time:</label><br />
       <input type="time" id='time' placeholder='10:00AM' />
      </div>
      <div className='Input_field'id='Number_of_person' >
       <label htmlFor="people_number">Number of Person:</label><br />
        <select name="number_of_people" id="people_number">
          <option value="2">2</option>
         <option value="1">1</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
         <option value="6">6</option>
       </select>
     </div>
     <Link to = "/OnlineO"   className='Link' ><button  className='Hero_Section hero_button'>Submit</button></Link>
    </div> 
    </div>
  )
}

export default TableB;
