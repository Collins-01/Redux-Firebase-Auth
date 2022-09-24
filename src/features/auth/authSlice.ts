import UserModel from "../../models/user_model";
import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../app/store";

export interface AuthState {
    user?: UserModel | null
}

const initialState: AuthState = { 
    user: null
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        update: (state, action: PayloadAction<AuthState>)=>{
            state.user= action.payload.user;
        },
        logOut: (state)=>{
            state.user = null;
        }
    }
})
export const {update,logOut} = authSlice.actions;

export const  selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;