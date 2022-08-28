import React from 'react'
import { withStyles } from '@material-ui/styles';
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { Formik } from 'formik';
import AnimateButton from '../../nePage/ui-component/extended/AnimateButton';
import Logo from "../../../img/logo34.jpeg";

import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    useMediaQuery

} from '@mui/material';
import Header from '../../Header';


const styles={
    ImageLogo:{
        maxWidth:"40px",
        Height:"38px"
    },
    spanBullet:{
        marginTop: "5px",
    display: "inline-block",
    width: "21px",
    height: "21px",
    backgroundColor: "red",
    borderRadius: "100%"
        
    },
    lisysmbol:{
        padding: "0 0 30px 17px",
    fontSize: "var(--font-size-text-6)",
    borderLeft: "none",
    letterspacing: "-.02em",
    },
    secondBaseInfo:{
        position: "relative",
    paddingTop: "6vh",
    visibility: "visible",
    opacity: "1"
    },
    firstlimap:{
        position: "relative",
    color: "blue",
    fontSize: "var(--font-size-text-5)",
    letterSpacing: "-.02em",
    listStyle: "none",
    borderLeft: "2px dashed yellow"
    }

}




function temel_Bilgiler(props) {

    const {classes}=props;

  return (
    <div>
        <Grid container >
            <Grid xs={12} sm={12} md={12} lg={12}>
               {/* desktop & tablet */}
               <div className="hidden lg:flex w-full h-full items-center justify-between">
                <Grid container>
                    <Grid item xs={2} sm={2} md={2} lg={2} style={{background:"#ffff", height:"100vh"}}>
                        <div style={{margin: "0 auto",
    padding: "20px",
    position: "relative",}}>
                        <div style={{display:"flex",marginTop:"10px", justifyContent:"center"}}>
                            <div className={classes.ImageLogo}>
                            <img src={Logo} alt="" />
                            </div>
                            <div>
                            <Typography variant='h6'>
                               Uygunusec
                           </Typography>
                            </div>
                        </div>

                        <div className={classes.secondBaseInfo}>
                            <ul>
                                <li className={classes.firstlimap}>
                                   <div style={{display:"flex"}}>
                                    <div>
                                        <span className={classes.spanBullet}></span>
                                    </div>
                                    &nbsp;&nbsp;
                                    <div>
                                        <Typography variant='h6'>
                                            
Teklif Bilgileri
                                        </Typography>
                                    </div>

                                   </div>

                                   <ul style={{ padding:"23px 0 0 15px"}}>
                                    <li className={classes.lisysmbol}> <div style={{display:"flex"}}>
                                        <div>
                                            <span className={classes.spanBullet} style={{marginTop:"0px !important"}}></span>
                                        </div>&nbsp;&nbsp;
                                        <div>
<Typography>
Temel Bilgiler
</Typography>
                                        </div>
                                        </div>  </li>
                                    <li className={classes.lisysmbol}>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <span className={classes.spanBullet} style={{marginTop:"0px !important"}}></span>
                                        </div>&nbsp;&nbsp;
                                        <div>
<Typography>
Kişisel Bilgiler
</Typography>
                                        </div>
                                        </div>
                                        
                                       </li>
                                    <li className={classes.lisysmbol}>
                                    <div style={{display:"flex"}}>
                                        <div>
                                            <span className={classes.spanBullet} style={{marginTop:"0px !important"}} ></span>
                                        </div>&nbsp;&nbsp;
                                        <div>
<Typography>
Meslek Bilgisi
</Typography>
                                        </div>
                                        </div>
                                        
                                         </li>
                                   </ul>
                                   
                                </li>
                                <li>
                                <div style={{display:"flex"}}>
                                    <div>
                                        <span className={classes.spanBullet}></span>
                                    </div>
                                    &nbsp;&nbsp;
                                    <div>
                                        <Typography variant='h6'>
                                        Araç Bilgileri
                                        </Typography>
                
                                    </div>

                                   </div>
                                   
                                    <ul style={{ padding:"23px 0 0 15px"}}>
                                        <li className={classes.lisysmbol}>

                                        <div style={{display:"flex"}}>
                                        <div>
                                            <span className={classes.spanBullet} style={{marginTop:"0px !important"}}></span>
                                        </div>&nbsp;&nbsp;
                                        <div>
<Typography>
Ruhsat Bilgileri
</Typography>
                                        </div>
                                        </div>
                                            
                                            </li>
                                        <li className={classes.lisysmbol}>

                                        <div style={{display:"flex"}}>
                                        <div>
                                            <span className={classes.spanBullet} style={{marginTop:"0px !important"}} ></span>
                                        </div>&nbsp;&nbsp;
                                        <div>
<Typography>
Araç Özellikeleri
</Typography>
                                        </div>
                                        </div>
                                            
                                            </li>
                                        <li className={classes.lisysmbol}>

                                        <div style={{display:"flex"}}>
                                        <div>
                                            <span className={classes.spanBullet} style={{marginTop:"0px !important"}} ></span>
                                        </div>&nbsp;&nbsp;
                                        <div>
<Typography>
Mevcut Poliçe Bilgileri
</Typography>
                                        </div>
                                        </div>
                                            
                                           </li>
                                    </ul>


                                </li>
                            </ul>
                        </div>

                        <div style={{marginTop:"300px"}}>
                            <Grid container>
                                <Grid xs={12} sm={12} md={12} lg={12}>
                                    <div>
                                        <Typography variant='subtitle2'>
                                        © UygunuSec.com
                                        </Typography>
                                    </div>

                                </Grid>

                            </Grid>
                        </div>


                        </div>
                        
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <section style={{ 
                            minHeight: "100vh",
                            paddingTop: "12vh",
                            paddingBottom: "40px"
                        }}>
                            <Grid container style={{ marginLeft:"117px" , maxWidth: "450px",
    padding: "0"}}>
                                <Grid xs={12} sm={12} md={12} lg={12}>

                                    <div>

                                        <Formik>
                                            <form action="">
                                            <FormControl  fullWidth margin="dense">
                            <InputLabel htmlFor="outlined-adornment-email-login">Ruhsat sahibi TC No</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="text"
                                value=""
                                name="email"
                                label="Ruhsat sahibi TC No" 
                            />
                        </FormControl> <br />
                        <FormControl   fullWidth margin="dense">
                            <InputLabel htmlFor="outlined-adornment-email-login">Cep Telefonu</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="text"
                                value=""
                                name="email"
                                label="Ruhsat sahibi TC No" 
                            />
                        </FormControl>

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    style={{float:"right"}}
                                >
                                    Devam
                                </Button>
                            </AnimateButton>
                        </Box>

                                            </form>
                                        </Formik>

                                    </div>

                                </Grid>

                            </Grid>
                        </section>

                    </Grid>

                </Grid>

               </div>
            </Grid>
        
        </Grid>
      
    </div>
  )
}

temel_Bilgiler.protoTypes={
    classes: PropTypes.object.isRequired,
  
  
  }

export default  (withStyles(styles)(temel_Bilgiler));

