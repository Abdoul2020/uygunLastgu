import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import phonePart from "../img/phoneHer.png"
import   backPhone from "../img/backgroundPhone.png"

import { Link } from "react-router-dom";

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
  useMediaQuery,
} from "@mui/material";

//import css
import "./MenuContainer.css"


// Images
import computerImage from "../img/computer1.png"
import phoneImage from "../img/phoneCall.png"
import { height } from "@mui/system";

// react mui here
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const styles={
  
}


const currencies = [

  {
    value: '',
    label: 'Kategori Seçiniz',
  },
  {
    value: 'Evim',
    label: 'Evim',
  },
  {
    value: 'Araç Sigortası',
    label: 'Araç Sigortası',
  },
  
    {
      value: 'Sağlığım',
      label: 'Sağlığım',
    },
    {
      value: 'Eşeyalarım',
      label: 'Eşeyalarım',
    },

  ];


  const productsChoose = [
    {
      value: 'EUR',
      label: 'Ürün Seçeiniz',
    },
    {
      value: 'USD',
      label: 'Kasko',
    },
    {
      value: 'EUR',
      label: 'Traffic Sigortası',
    },
    {
      value: 'BTC',
      label: 'Tanımlayıcı Sağlık Sigortası',
    },
    {
      value: 'JPY',
      label: 'Özel Sağlık Sigortası',
    },

    {
      value: 'JPYr',
      label: 'DASK',
    },
    {
      value: 'JPYr',
      label: 'Konut Sigortası',
    },
    {
      value: 'JPYr',
      label: 'Evim Güvende',
    },
    {
      value: 'JPYr',
      label: 'Cep Telefonu',
    },
  ];




const GenelFormAl = (props) => {
  const { classes } = props;

  //change Input here
  const [currency, setCurrency] =useState('');
  
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [checked, setChecked] = useState(true);

  //Genl form all from here
  const [formInput, setformInput]= useState(false)



  return (
   <div style={{width:"100%"}}>
     <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12}>
            <Grid container>
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h4">
                        <div style={{textAlign:"center"}}>
                            <b>Başvuru Yapmak için</b> <br />
                            Bilgilerinizi Bırakın Sizi Arayalım
                        </div>

                    </Typography>

                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} style={{ textAlign:"center", justifyContent:"center",width:"100%"}}>
                    <Grid container >
                        <Grid xs={12} sm={12} md={12} lg={12} style={{textAlign:"center", justifyContent:"center" , background:"#FFFF", marginTop:"50px" }}
                        marginLeft={{sm:"0px" , xs:"0px", md:"200px" , lg:"360px"}}
                        marginRight={{sm:"0px" , xs:"0px", md:"200px" , lg:"360px"}}
                        >

                            <div 
                           style={{
                            marginLeft:"100px",
                            marginRight:"100px",
                            marginTop: "50px",
    marginBottom: "50px"
                           }}
                            >

                            <TextField
                       fullWidth
          id="standard-select-currency-native"
          select
          label="Kategri Seçiniz"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        {/* {
          formInput && (

            <TextField
                       fullWidth
          id="standard-select-currency-native"
          select
          label="Ürün Seçiniz"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {productsChoose.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

          )
        } */}

<TextField
                       fullWidth
          id="standard-select-currency-native"
          select
          label="Ürün Seçiniz"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="standard"
        >
          {productsChoose.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        

        <TextField id="standard-basic" label="Ad Soyad*" variant="standard"  fullWidth />
        <TextField id="standard-basic" label="T.C. Kimlik Numaranız*" variant="standard"  fullWidth />
        <TextField id="standard-basic" label="Telefon Numaranız*" variant="standard"  fullWidth/>
        <TextField id="standard-basic" label="E-Posta Adresiniz*" variant="standard"  fullWidth/>
        <TextField id="standard-basic" label="İsteğiniz" variant="standard"  fullWidth/>



        <Grid container alignItems="center" justifyContent="space-between" marginTop="50px">
              <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:"left"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="success"
                    />
                  }
                  label={
                    <Typography variant="subtitle1"
                    style={{
                      fontFamily: 'Montserrat',
fontStyle: "normal",
fontWeight: 700,
fontSize: "13px",
lineHeight: "16px",
color: "rgb(35, 45, 99)"
                    }}>
                      Kişisel Verilerin İşlenmesi Hakkında Aydınlatma &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"
                        style={{
                          fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "16px",
    color: "rgb(35, 45, 99)"
                        }}
                      >
                         Metnini okudum. *
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:"left"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="success"
                    />
                  }
                  label={
                    <Typography variant="subtitle1"
                    style={{
                      fontFamily: 'Montserrat',
fontStyle: "normal",
fontWeight: 700,
fontSize: "13px",
lineHeight: "16px",
color: "rgb(35, 45, 99)"
                    }}
                    >
                      Ticari Elektronik İleti Gönderimi İçin Kişisel Verilerin İşlenmesine  &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"

                        style={{
                          fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "16px",
    color: "rgb(35, 45, 99)"
                        }}
                      >
                        Yönelik Aydınlatma Metnini okudum
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign:"left"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="success"
                    />
                  }
                  label={
                    <Typography variant="subtitle1"
                    style={{
                      fontFamily: 'Montserrat',
fontStyle: "normal",
fontWeight: 700,
fontSize: "13px",
lineHeight: "16px",
color: "rgb(35, 45, 99)"
                    }}>
                      Ticari elektronik ileti gönderilmesini  &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"
                        style={{
                          fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "16px",
    color: "rgb(35, 45, 99)"
                        }}
                      >
                        kabul ediyorum.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

        <div className=""
               style={{
                
  position: "relative",
  justifyContent:"center",
  marginTop:"40px"

              }}
              >
              <button
                type="button"
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"

                style={{
                  width: "auto !important",
    height: "auto !important",
    padding: "18px 90px",
    lineHeight: "17px",
    transformOrigin: "center center",
    fontWeight: "600!important",
    border:"none",
    fontSize: "18px",
    margin:"auto",
    background:"rgb(28, 123, 23)",
    color:"#FFFF"
   
                }}
              >
                 BANA ULAŞIN
              </button>
             
              </div>

                            </div>

                        

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </Grid>

     </Grid>
   </div>


  );
};


GenelFormAl.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(GenelFormAl));
