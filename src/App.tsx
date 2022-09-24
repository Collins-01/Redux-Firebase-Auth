import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './screens/authentication/Login';
import Register from './screens/authentication/Register';
import HomePage from './screens/home/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
