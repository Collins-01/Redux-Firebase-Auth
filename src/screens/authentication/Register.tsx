import React, { useState } from 'react'
import AuthService from '../../services/auth_service';
import AppButton from '../widgets/AppButton';
import AuthInputField from '../widgets/AuthInputField';
import './styles/Register.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import User from '../../models/user_model'
import UserModel from '../../models/user_model';
import { AuthState, update } from '../../features/auth/authSlice';
function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleRegister = async()=>{
    try {
      setLoading(true);
      var res = await AuthService.register(email,password, name);
      setLoading(false);
      if(res !==null){
        console.log(`Registered User Name:::::::: ${res.user.displayName}`)
        console.log(`Registered User Email:::::::: ${res.user.email}`)
        console.log(`Registered User ID:::::::: ${res.user.uid}`);
        const newUser: UserModel = {email: res.user.email, name: res.user.displayName};
        const authSate : AuthState = {user: newUser}
        dispatch(update(authSate));
        navigate('/home');
      }
      alert('No user was created');
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }
  return (
    <div className='register'>
      
    <div className="register__container">
    <AuthInputField onChange={(e)=>setName(e.target.value)} placeHolder='Name' type='text'/>
    <AuthInputField onChange={(e)=>setEmail(e.target.value)} placeHolder='Email' type='email'/>
    <AuthInputField onChange={(e)=>setPassword(e.target.value)} placeHolder='Password' type='password'/>
    <AppButton isDisabled={false} isLoading ={loading} title='Register' onClick={handleRegister}/>
    </div>
    </div>
  )
}

export default Register

// GO GO GO (Juice world)