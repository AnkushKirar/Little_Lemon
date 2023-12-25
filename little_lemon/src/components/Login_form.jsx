import React from 'react'
import '../sass/App.scss'

const Login_form = () => {
  return (

        <>
         
        
        <div className='login_form'>
        
        <section className="form"> 
        <div className='login_conatiner'>
            
            <h3 className='heading'>Login</h3><br/><br/>
            <label className='label' htmlFor="1">User Name</label><br/>
            <input className='input_login' type="email" id = "1" placeholder="Enter the Email"/>
            <br/>
            <label className='label' htmlFor="2">Password</label><br/>
            <input className='input_login' type="password" placeholder="Enter the password"/><br/><br/>
            <button className="button">Sign in</button>
            </div>
          
            

        </section>
        <section className="form">
            
            <div className = "login_conatiner ">
            <h3 className='heading'>SignUp</h3><br/><br/>
            <label  className='label' htmlFor="03">Name</label><br/>
            <input className='input_login' type="text" id = "03"/><br/>
            <label className='label' htmlFor="04">User Name</label><br/>
            <input className='input_login' type="text" id = "04"/><br/>
            <label className='label' htmlFor="05">Password</label><br/>
            <input className='input_login' type="password" id = "05"/><br/>
            <label className='label' htmlFor="06">Confirm password</label><br/>
            <input className='input_login' type="password" id = "06"/><br/><br/>
            <button className="button">SignUp</button>
            </div>
         
            
            
        </section>
    
    </div>
    </>
  )
}

export default Login_form;
