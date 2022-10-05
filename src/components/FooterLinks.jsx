import React from 'react'
import { Grid, Stack, Box, Link } from "@mui/material";

const FooterLinks = (props) => {

    return (
        <Grid xs={3} >
            <h4>{props.title}</h4>
            <Box sx={{ width: '100%', marginTop: 2, fontSize:"15px", lineHeight:"22px", fontWeight:"500px" }}>
                <Stack spacing={0.2}>
                    {props.data.map((row) => (
                        <Link href={row.link} style={{ color: '#717171' , fontSize:"15px", lineHeight:"22px" }} underline="hover">{row.name}</Link>
                    ))}
                </Stack>
            </Box>
        </Grid>
    )
}

export default FooterLinks