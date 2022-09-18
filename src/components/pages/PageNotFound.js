import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: 20,
          minHeight: '100vh'
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={0}>
            <Grid xs={12}>
              <Typography variant="h1">
                404
              </Typography>
              <Typography variant="h6">
                Aradığınız sayfayı bulamadık.
              </Typography>
              <Button variant="contained" component={Link} to="/">Anasayfa</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
}

export default PageNotFound