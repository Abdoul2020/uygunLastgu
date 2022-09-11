import React from 'react'
import { Grid } from '@mui/material'
import EnhancedTable from '../AdminOffersTable';

const Admin = () => {
    return (
        <Grid container direction="column" sx={{ minHeight: '87vh' }}>
            <EnhancedTable />
        </Grid>
    )
}

export default Admin