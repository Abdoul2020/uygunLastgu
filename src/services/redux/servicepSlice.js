import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'; //cookies
import axios from 'axios';
import { toastify } from '../toastify';
import { getTranslatedData } from "../../utils/translater";

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
        cost: data.cost,
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

        statusErr: "",
        statusCode: null,
        errors: null,

        id: null,
        service_name: "",
        status: "",
        additional_info: "",
        form_url: null,
        invoice_url: null,
        cost: null,
        is_completed: 0
    },
    reducers: {
        statusReset(state) {
            state.statusErr = "";
        },
        resetOffer(state) {
            state.statusCode = null;

            state.id = null;
            state.service_name = "";
            state.status = "";
            state.additional_info = "";
            state.form_url = null;
            state.invoice_url = null;
            state.cost = null;
            state.is_completed = 0;
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

            if (state.statusCode == 200) {
                state.id = action.payload.data.body.data.id;
                state.service_name = action.payload.data.body.data.service_name;
                state.status = action.payload.data.body.data.status;
                state.additional_info = action.payload.data.body.data.additional_info;
                state.form_url = action.payload.data.body.data.form_url;
                state.invoice_url = action.payload.data.body.data.invoice_url;
                state.cost = action.payload.data.body.data.cost;
                state.is_completed = action.payload.data.body.data.is_completed;
            }
            else {
                toastify({ type: 'error', message: state.errors, autoClose: 1000 });
            }
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
            //state.errors = action.payload.data.data.body.errorMessage;
            state.statusErr = "success";
            //state.statusCode = action.payload.data.data.status;

            resetOffer();
        },
        [putServiceProviderAsync.rejected]: (state) => {
            state.statusErr = "error";
        }
    }
})
export const { statusReset, resetOffer } = servicepSlice.actions
export default servicepSlice.reducer;