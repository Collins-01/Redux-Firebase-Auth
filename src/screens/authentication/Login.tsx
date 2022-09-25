import React, { useState } from 'react'
import AuthService from '../../services/auth_service';
import AppButton from '../widgets/AppButton';
import AuthInputField from '../widgets/AuthInputField';
import './styles/Login.css';
import {useNavigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import authSlice, { AuthState, selectAuth, update } from '../../features/auth/authSlice';
import UserModel from '../../models/user_model';
function Login() {
  const count = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loading, setLoading]=useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = async ()=>{
    
    try {
      setLoading(true);
      var response = await AuthService.login(email,password);
      setLoading(false);
      if(response.user.uid){
        console.log(`LOGGEDIN User Name:::::::: ${response.user.displayName}`)
        console.log(`LOGGEDIN User Email:::::::: ${response.user.email}`)
        console.log(`LOGGEDIN User ID:::::::: ${response.user.uid}`)
        const newUser: UserModel = {email: response.user.email, name: response.user.displayName};
        const authSate : AuthState = {user: newUser}
        dispatch(update(authSate));
        // navigate
        navigate('/home')
      }else{
        console.log(`Login Error, user was null`);
        //* Handle Error
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }
  return (
    <div className='login'>
      <div className="login__container">
        <AuthInputField  onChange={(e)=>setEmail(e.target.value)} placeHolder= 'Email' type='email'  />
        <AuthInputField  onChange={(e)=>setPassword(e.target.value)} placeHolder= 'Password' type='password'  />
      
      {/* <p>{passwordError}</p> */}
      <AppButton isDisabled={true} isLoading = {loading} title='Login' onClick={handleSubmit}/>
      </div>
    </div>
  )
}

export default Login