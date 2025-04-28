import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./loginSetup"

const Store = configureStore({
    reducer : {
        Login  : LoginReducer,
    },
})
export default Store