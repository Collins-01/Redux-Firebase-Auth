import React, { ChangeEventHandler } from 'react'
import './styles/AuthInputField.css';

export interface AuthInputProps{
    placeHolder: string;
    type: string | 'text' | 'email' | 'password';
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;

}
function AuthInputField(props:AuthInputProps) {
  return (
    <div className='authInputField'>
        <input type={props.type} placeholder={props.placeHolder} onChange={props.onChange}/>
        
    </div>
  )
}

export default AuthInputField