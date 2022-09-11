import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie';
import axios from 'axios';

export const postUserInfoAsync = createAsyncThunk("user/postUserInfoAsync", async (data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.post(`/controlza/backend/api/user/index.php`, {
        userUID: data.id,
    }, {
        headers: {
            'Authorization': token
        }
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
    });
    return res;
});

export const postServiceProviderInfoAsync = createAsyncThunk("user/postServiceProviderInfoAsync", async (data) => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.post(`/controlza/backend/api/user/index.php`, {
        userUID: data.id,
    }, {
        headers: {
            'Authorization': token
        }
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => {
        console.log(err);
    });
    return res;
});

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        user: [],
        serviceprovider: [],
        statusUser: "",
        statusCode: null,
        errors: null,
    },
    reducers: {
        resetUsers(state) {
            state.user = [];
            state.serviceprovider = [];
            state.statusUser = "";
            state.statusCode = null;
            state.errors = null;
        },
    },
    extraReducers: {
        [postUserInfoAsync.pending]: (state) => {
            state.statusUser = "loading";
        },
        [postUserInfoAsync.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.user = action.payload.data.body.data;
            state.statusUser = "success";
            state.statusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
        },
        [postUserInfoAsync.rejected]: (state) => {
            state.statusUser = "error";
        },
        [postServiceProviderInfoAsync.pending]: (state) => {
            state.statusUser = "loading";
        },
        [postServiceProviderInfoAsync.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.serviceprovider = action.payload.data.body.data;
            state.statusUser = "success";
            state.statusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
        },
        [postServiceProviderInfoAsync.rejected]: (state) => {
            state.statusUser = "error";
        }
    }
})

export const { resetUsers } = userInfoSlice.actions;
export default userInfoSlice.reducer;