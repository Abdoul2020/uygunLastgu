import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie';
import axios from 'axios';
import { getTranslatedData } from "../../utils/translater";

export const getAllOffersProviderAsync = createAsyncThunk("admin/getAllOffersProviderAsync", async (data) => {

    const cookies = new Cookies();
    const token = cookies.get('idToken');
    const res = await axios.get(`/controlza/backend/api/admin/offers/index.php?iscompleted=${data.is_completed}`, {
        headers: {
            'Authorization': token
        }
    })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        });
    return res;

});

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        offers: [],
        status: "",
        statusCode: null,
        errors: null,
    },
    extraReducers: {
        [getAllOffersProviderAsync.pending]: (state) => {
            state.status = "loading";
        },
        [getAllOffersProviderAsync.fulfilled]: (state, action) => {
            //console.log(action.payload.data)
            state.offers = getTranslatedData(action.payload.data.body.data);
            state.status = "success";
            state.statusCode = action.payload.data.status;
            state.errors = action.payload.data.body.errorMessage;
        },
        [getAllOffersProviderAsync.rejected]: (state) => {
            state.status = "error";
        }
    }
})

export default adminSlice.reducer;