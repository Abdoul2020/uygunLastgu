import React from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOffersProviderAsync } from '../../services/redux/adminSlice';
import EnhancedTable from '../AdminOffersTable';

const Admin = () => {
    const { offers, status, statusCode, erros } = useSelector(state => state.adminSlice);
    const dispatch = useDispatch();

    const getAllOffers = async (iscompleted) => {
        await dispatch(getAllOffersProviderAsync({ is_completed: iscompleted }));
    }

    React.useEffect(() => {
        getAllOffers(false);
    }, []);

    return (
        <Grid container direction="column" sx={{ minHeight: '100vh' }}>
            {status === "success" &&
                <EnhancedTable />
            }
        </Grid>
    )
}

export default Admin