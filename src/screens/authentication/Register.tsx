import React from 'react'
import './styles/Register.css';
function Register() {
  return (
    <div className='register'>
         <div className="register__container">
        <input type='text' placeholder='Name'/>
      <input type='email' placeholder='Email'/>
      <input type='password' placeholder='Password'/>
      <button>Login</button>
      </div>
    </div>
  )
}

export default Register