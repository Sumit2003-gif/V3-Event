import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const LoginButton = createSlice(
    {
        name: "Login",
        initialState : {
            isLogin : false,
            username : null,
        },
        reducers : {
            Login : (state,action) => {
                state.isLogin = true ;
                state.username = action.payload;
            },
            Logout : (state,action) => {
                state.isLogin = false;
                state.username = null
            }
        }
    }
)
export const {Login , Logout} = LoginButton.actions;
export default LoginButton.reducer