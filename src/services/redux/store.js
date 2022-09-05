import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import registerSlice from './registerSlice';
import loginSlice from './loginSlice'
import servicepSlice from './servicepSlice'
import adminSlice from './adminSlice'



export const store = configureStore({

    reducer: {
        registerSlice: registerSlice,
        user: userReducer,
        loginSlice: loginSlice,
        servicepSlice: servicepSlice,
        adminSlice: adminSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});