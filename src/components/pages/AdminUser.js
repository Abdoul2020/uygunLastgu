import { Grid } from '@mui/material'
import React from 'react'
import UserListTable from '../UserListTable'

const AdminUser = () => {
    return (
        <Grid container direction="column" sx={{ minHeight: '87vh' }}>
            <UserListTable />
        </Grid>
    )
}

export default AdminUser