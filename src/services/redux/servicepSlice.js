import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'; //cookies
import axios from 'axios';
import { toastify } from '../toastify';
import { getTranslatedData } from "../../utils/translater";
import { postUserInfoAsync } from "./userInfoSlice";
import { useDispatch } from "react-redux";

export const getServiceProviderAsync = createAsyncThunk("servicep/getServiceProviderAsync", async () => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.get(`/controlza/backend/api/servicep/index.php`, {
        headers: {
            'Authorization': token
        }
    })
        .then(res => {
            console.log(res.data);
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;

});

export const postServiceProviderAsync = createAsyncThunk("servicep/postServiceProviderAsync", async (data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.post(`/controlza/backend/api/servicep/index.php`, {
        service_codename: data.service_codename
    }, {
        headers: {
            'Authorization': token
        }
    })
        .then(res => {
            console.log(res.data);
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;

});

export const putServiceProviderAsync = createAsyncThunk("servicep/putServiceProviderAsync", async (data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.put(`/controlza/backend/api/servicep/index.php`, {
        id: data.id,
        //form_url: data.form_url,
        //invoice_url: data.invoice_url,
        [data.title]: data.data,
        //is_completed: data.is_completed
    }, {
        headers: {
            'Authorization': token
        }
    })
        .then(res => {
            return { data: res };
        })
        .catch(err => {
            return err;
        });
    return res;

});


const servicepSlice = createSlice({
    name: "servicep",
    initialState: {
        getStatusCode: null,
        offers: [],
        offer: [],
        editOffer: [],

        statusErr: "",
        statusCode: null,
        errors: null,
    },
    reducers: {
        statusReset(state) {
            state.statusErr = "";
        },
        resetOffer(state) {
            state.statusCode = null;
            state.offer = [];
        },
        setEditOffer(state, action) {
            state.editOffer = action.payload;
        }
    },
    extraReducers: {
        [getServiceProviderAsync.pending]: (state) => {
            state.statusErr = "loading";
        },
        [getServiceProviderAsync.fulfilled]: (state, action) => {
            console.log(action.payload.data)
            state.statusErr = "success";
            state.getStatusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
            state.offers = getTranslatedData(action.payload.data.body.data);
        },
        [getServiceProviderAsync.rejected]: (state) => {
            state.statusErr = "error";
        },
        [postServiceProviderAsync.pending]: (state) => {
            console.log("loading")
            state.statusErr = "loading";
        },
        [postServiceProviderAsync.fulfilled]: (state, action) => {
            console.log("data:" + action.payload.data.body);
            state.errors = action.payload.data.body.errorMessage;
            state.statusErr = "success";
            state.statusCode = action.payload.data.status;

            if (state.statusCode == 200)
                state.offer = action.payload.data.body.data;
            else
                toastify({ type: 'error', message: state.errors, autoClose: 1000 });
        },
        [postServiceProviderAsync.rejected]: (state) => {
            console.log("error");
            state.statusErr = "error";
        },

        [putServiceProviderAsync.pending]: (state) => {
            state.statusErr = "loading";
        },
        [putServiceProviderAsync.fulfilled]: (state, action) => {
            console.log(action.payload.data)
            state.statusErr = "success";
            resetOffer();
        },
        [putServiceProviderAsync.rejected]: (state) => {
            state.statusErr = "error";
        }
    }
})
export const { statusReset, resetOffer, setEditOffer } = servicepSlice.actions
export default servicepSlice.reducer;