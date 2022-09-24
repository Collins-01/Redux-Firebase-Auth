import React from 'react'
import AppButton from '../widgets/AppButton'
import './styles/HomePage.css'

function HomePage() {
  const handleLogOut =()=>{}
  return (
    <div className='homePage'>
      <div className="homePage__container">
        <h1>Oriakhi Collins</h1>
        <h3>oriakhicolls01@gmail.com</h3>
        <AppButton isDisabled={false} isLoading={false} title='SignOut' onClick={handleLogOut}/>
      </div>
    </div>
  )
}

export default HomePage