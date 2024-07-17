import React from 'react'
import './CSS/LoginSignup.css'

const loginSignup = () => {
  return (
    <div className= "loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your name ' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy</p>


        </div>

      </div>
      
    </div>
  )
}

export default loginSignup
