import React, { useState } from 'react'
import AuthService from '../../services/auth_service';
import AppButton from '../widgets/AppButton';
import AuthInputField from '../widgets/AuthInputField';
import './styles/Login.css';
function Login() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loading, setLoading]=useState<boolean>(false);
  const handleSubmit = async ()=>{
     if(!email.includes('@')){
        setEmailError('Please provide a valid email.')
     }
     if(password.length<6){
      setPasswordError('Password must be 6+ chars')
     }
     if(email.includes('@') && password.length>=6){
      try {
        var response = await AuthService.login(email,password);
        if(response.user.uid){
          // TODO : Dispatch Update user
          // navigate
        }else{
          //* Handle Error
        }
      } catch (error) {
        alert(error);
      }
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