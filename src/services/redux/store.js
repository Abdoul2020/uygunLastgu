import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice'



export const store = configureStore({

    reducer: {
        registerSlice: registerSlice,
        user: userReducer,
        loginSlice: loginSlice,
    },
});