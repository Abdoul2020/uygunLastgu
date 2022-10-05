import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'; //cookies




//get UserData Info
export const getUserAsync = createAsyncThunk("profile/getUserAsync", async() => {
    const cookies = new Cookies();
    const token = cookies.get('idToken');
    console.log("token doğru:", token)
    const res = await axios.get(`/controlza/backend/api/user/index.php`, {
            headers: {
                'Authorization': token
            }
        }).then((res) => {
            return res;
        })
        .catch(err => {
            console.log("kullanıcı veri alamadık:", err)
            return err;
        });

    return res;

});


//send offer to servis provider
export const sendOfferToAsync = createAsyncThunk("profile/sendOfferToAsync", async(data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    console.log("token doğru:", token)
    const res = await axios.post(`/controlza/backend/api/offer/index.php`, {
            service_codename: data.service_codename,
            additional_info: data.additional_info
        }, {
            headers: {
                'Authorization': token
            }

        }).then((res) => {
            return res;
        })
        .catch(err => {
            console.log("kullanıcı veri alamadık:", err)
            return err;
        });

    return res;

});






export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uid: null,
        displayName: null,
        email: null,
        phoneNumber: null,
        emailVerified: null,
        tc: null,
        role: null,
        status: "",
        offerSendStatus: "",
    },

    extraReducers: {

        [getUserAsync.pending]: (state, action) => {

            state.status = "loading";
        },
        [getUserAsync.fulfilled]: (state, action) => {
            state.status = "success";
            state.displayName = action.payload.data ? action.payload.data.body.data.name : "";
            state.email = action.payload.data ? action.payload.data.body.data.email : "";
        },



        [sendOfferToAsync.pending]: (state, action) => {
            state.offerSendStatus = "loading";
        },
        [sendOfferToAsync.fulfilled]: (state, action) => {

            state.offerSendStatus = "success";


        },

    }



});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;