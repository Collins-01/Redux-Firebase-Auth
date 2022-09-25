import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { AuthState, logOut, selectAuth, update } from './features/auth/authSlice';
import auth from './firebase_app';
import UserModel from './models/user_model';
import Login from './screens/authentication/Login';
import Register from './screens/authentication/Register';
import HomePage from './screens/home/HomePage';
import Protected, { ProtectedRouteProps } from './screens/widgets/Protected';


function App() {
  const authState = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: authState.user!==null,
    authenticationPath: '/',
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user!==null){
        console.log(`User is not null`);
        const newUser: UserModel = {email: user.email, name: user.displayName};
        const authSate : AuthState = {user: newUser}
        dispatch(update(authSate));
      }else{
          dispatch(logOut());
      }
      return unsubscribe;
    })
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Protected {...defaultProtectedRouteProps} outlet={<HomePage />} />} />
      </Routes>
    </div>
  );
}

export default App;
