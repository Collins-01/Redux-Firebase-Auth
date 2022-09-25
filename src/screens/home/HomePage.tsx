import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import  { logOut, selectAuth } from '../../features/auth/authSlice'
import AuthService from '../../services/auth_service'
import AppButton from '../widgets/AppButton'
import './styles/HomePage.css'
import {useNavigate} from 'react-router-dom';

function HomePage() {
  const user = useAppSelector(selectAuth).user;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading]= useState<boolean>(false);
  const handleLogOut =async()=>{
    try {
      setLoading(true);
      const res =await AuthService.logOut();
      setLoading(false);
      if(res){
        dispatch(logOut());
        navigate('/');
      }
      else{
        alert('Failed to SignOut user.');
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  }
  return (
    <div className='homePage'>
      <div className="homePage__container">
        <h1>{user?.name}</h1>
        <h3>{user?.email}</h3>
        <AppButton isDisabled={false} isLoading={loading} title='SignOut' onClick={handleLogOut}/>
      </div>
    </div>
  )
}

export default HomePage