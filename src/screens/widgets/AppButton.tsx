import React, { MouseEventHandler } from 'react'
import'./styles/AppButton.css';
import CircularProgress from '@mui/material/CircularProgress';


 interface AuthButtonProps { 
    title: string;
    isLoading: boolean | false;
    isDisabled: boolean | true;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
 }
function AppButton(props: AuthButtonProps) {
  return (
    <div className='appButton'>
      {
     (props.isLoading)?   (<div className="appButton__loader"><CircularProgress /></div>) : (<button onClick={props.onClick} color={(props.isDisabled) ? ('blue'): ('lightBlue')}  aria-busy >{props.title}</button>)
      }
        
        
    </div>
  )
}

export default AppButton