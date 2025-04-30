import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { Password } from "phosphor-react";

const LoginButton = createSlice(
    {
        name: "Login",
        initialState : {
            isLogin : false,
            username : null,
            email : null,
            password : null,
            confirm : null,
        },
        reducers : {
            Login : (state,action) => {
                state.isLogin = true ;
                state.username = action.payload;
                state.email = action.payload
                state.password = action.payload
                state.confirm = action.payload
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