import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false, 
    userInfo: {}, 
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
}) 


export default authSlice.reducer