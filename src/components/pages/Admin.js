import React from 'react'
import { Grid } from '@mui/material'
import EnhancedTable from '../AdminOffersTable';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import { getUserInfoNoIdAsync } from '../../services/redux/userInfoSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get('idToken');
        if (token != null) {
            const decodedToken = jwtDecode(token);
            if (decodedToken.exp * 1000 < Date.now())
                navigate("/404");
            else {
                dispatch(getUserInfoNoIdAsync()).then((res) => {
                    if (res.payload.data.body.data.role != "admin")
                        navigate("/404");
                });
            }
        } else
            navigate("/404");
    }, []);
    return (
        <Grid container direction="column" sx={{ minHeight: '87vh' }}>
            <EnhancedTable />
        </Grid>
    )
}

export default Admin