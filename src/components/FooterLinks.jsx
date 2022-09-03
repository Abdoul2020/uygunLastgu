import React from 'react'
import { Grid, Stack, Box, Link } from "@mui/material";

const FooterLinks = (props) => {

    return (
        <Grid xs={3} >
            <h4>{props.title}</h4>
            <Box sx={{ width: '100%', marginTop: 2 }}>
                <Stack spacing={0.2}>
                    {props.data.map((row) => (
                        <Link href={row.link} style={{ color: '#717171' }} underline="hover">{row.name}</Link>
                    ))}
                </Stack>
            </Box>
        </Grid>
    )
}

export default FooterLinks