import React, { MouseEventHandler } from 'react'
import'./styles/AppButton.css';
// import CircularProgress from '@mui/material/CircularProgress';


 interface AuthButtonProps { 
    title: string;
    isLoading: boolean | false;
    isDisabled: boolean | true;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
 }
function AppButton(props: AuthButtonProps) {
  return (
    <div className='appButton'>
        <button onClick={props.onClick} color={(props.isDisabled) ? ('blue'): ('lightBlue')}  aria-busy >{props.title}</button>
        {/* <CircularProgress /> */}
    </div>
  )
}

export default AppButton