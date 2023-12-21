import React from 'react'
import '../sass/App.scss'
import image from '../assets/images/Asset 14@4x.png'

const Login_form = () => {
  return (

        <>
         
        
        <div className='login_form'>
        <img src = {image} href = "logo" className = 'img login_img'/>
        <section className="form"> 
        <div className='login_conatiner'>
            
            <h3 className='heading'>Login</h3><br/><br/>
            <label className='label' forHTML="1">User Name</label><br/>
            <input className='input_login' type="email" id = "1" placeholder="Enter the Email"/>
            <br/>
            <label className='label' forHTML="2">Password</label><br/>
            <input className='input_login' type="password" placeholder="Enter the password"/><br/><br/>
            <button className="button">Sign in</button>
            </div>
          
            

        </section>
        <section className="form">
            
            <div className = "login_conatiner ">
            <h3 className='heading'>SignUp</h3><br/><br/>
            <label  className='label' forHTML="03">Name</label><br/>
            <input className='input_login' type="text" id = "03"/><br/>
            <label className='label' forHTML="04">User Name</label><br/>
            <input className='input_login' type="text" id = "04"/><br/>
            <label className='label' forHTML="05">Password</label><br/>
            <input className='input_login' type="password" id = "05"/><br/>
            <label className='label' forHTML="06">Confirm password</label><br/>
            <input className='input_login' type="password" id = "06"/><br/><br/>
            <button className="button">SignUp</button>
            </div>
         
            
            
        </section>
    
    </div>
    </>
  )
}

export default Login_form;
