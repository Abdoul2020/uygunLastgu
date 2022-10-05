import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";

import { motion } from "framer-motion";

import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

import { Formik } from "formik";
import AnimateButton from "../nePage/ui-component/extended/AnimateButton";
import Logo from "../../img/logo34.jpeg";

import useScriptRef from "../nePage/hooks/useScriptRef";
import { useTheme } from "@mui/material/styles";


//import css
import "../MenuContainer.css"


//cookies control
import Cookies from 'universal-cookie'; //cookies


//formik
import * as Yup from "yup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";



// redux connection
import { useSelector, useDispatch } from 'react-redux';
import {sendOfferToAsync} from "../../services/redux/userSlice";

// react mui here
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


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
    useMediaQuery,
  } from "@mui/material";


const styles = {
    ImageLogo: {
      maxWidth: "40px",
      Height: "38px",
    },
    spanBullet: {
      marginTop: "5px",
      display: "inline-block",
      width: "21px",
      height: "21px",
      backgroundColor: "#ffff",
      borderRadius: "100%",
      border: "2px solid #07bc0c",
    },
    lisysmbol: {
      padding: "0 0 30px 17px",
      fontSize: "var(--font-size-text-6)",
      borderLeft: "none",
      letterspacing: "-.02em",
    },
    secondBaseInfo: {
      position: "relative",
      paddingTop: "6vh",
      visibility: "visible",
      opacity: "1",
    },
    firstlimap: {
      position: "relative",
      color: "blue",
      fontSize: "var(--font-size-text-5)",
      letterSpacing: "-.02em",
      listStyle: "none",
      borderLeft: "2px dashed yellow",
    },
  };





const TopHeaderKako = (props) => {
  const { classes } = props;


  const Theme = useTheme();

  const dispatch = useDispatch();//dispatch

  const userStatus = useSelector(state => state.userSlice.offerSendStatus);


  useEffect(() => {
    console.log("son durum:", userStatus)
    if(userStatus=="success"){
      console.log("veri gitti")

    }
 }, [userStatus]);


  const scriptedRef = useScriptRef();

  //form kontrol heer
  const [firstControl, setfirstControl] = useState(false);
  const [secondControl, setsecondControl] = useState(false);
  const [thirdControl, setthirdControl] = useState(false);


  //devam button control 
  const [contineuActive, setcontineuActive] = useState(false)
  const [secondContinue,setsecondContinue]= useState(false)
  const [ thirdContinue, setthirdContinue] = useState(false)

  //open alt part of second button
  const [openDownButton, setopenDownButton]= useState(false)

  const [tcInfo, settcInfo] = useState("");
  const [PhoneInfo, setPhoneInfo] = useState("");
  const [emailInfo, setemailInfo] = useState("");
  const [serviceInfo, setserviceInfo] = useState("car_traffic");
  const [plakaInfo, setPlakaInfo] = useState("");

  //kasko Info************
  const kasko_trafficInfo = {
    tc: tcInfo,
    phone: PhoneInfo,
    email: emailInfo,
    service_codename: serviceInfo,
    additional_info: plakaInfo,

  };

  useEffect(() => {
    console.log("here you are kasko Info:", kasko_trafficInfo);

    if(kasko_trafficInfo.tc !="" && kasko_trafficInfo.phone !=""){
      setcontineuActive(true)
      console.log("active oldu:")
    }
    if(kasko_trafficInfo.email !="" ){
      setsecondContinue(true)
    }

    if(kasko_trafficInfo.additional_info != "") {
      setthirdContinue(true)
      console.log("setThird:", thirdContinue )
    }

  }, [kasko_trafficInfo]);

  //end of Kasko Info **************
  

  function InfoDataSubimit() {
    if(kasko_trafficInfo.additional_info != ""){
      dispatch(sendOfferToAsync(kasko_trafficInfo));
    console.log("veri gitti")
    }
    
  }

  //first continue Bottom
  async function InfoContinue(e) {
    e.preventDefault();

    if (kasko_trafficInfo.tc != "" && kasko_trafficInfo.phone != "") {
      setfirstControl(true);
    }
    if (kasko_trafficInfo.email != "") {
      setsecondControl(true);
      
    }

    console.log("hello boş :", kasko_trafficInfo.tc);

    //e.preventDefault();handleSubmit();console.log("hello click")}
  }

  const cookies = new Cookies();
    const token = cookies.get('idToken');

    console.log("tkeonhere :", token)

    
    //firstcontrol useeffect
    useEffect(() => {
      
      if (token){
        setfirstControl(true)
        setsecondControl(true)
      }
    }, [firstControl])

    // display none or block
    const statusBlock= token ? "none": "block"

    console.log("ne çıktı:", statusBlock)


  
  
  return (

    <div style={{width:"100%", }}>

      {/* <h2 className="heading">UygunuSec.com Hakkında Merak Edilen</h2>
      <Searchbar onSearchChange={handleSearchChange}/> 
      <section className='faq'>
       {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
      </section>       */}

      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} style={{width:"100%", background:"#28b23f", height:"auto" ,
        backgroundImage: "url(" + "https://www.turkiyesigorta.com.tr/ResourcePackages/VE/assets/img/header-new-bg.svg" + ")",
        backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      
      }}>
<Grid container>
    <Grid xs={12} sm={12} md={5} lg={5} style={{textAlign:"center", marginTop: "150px", fontFamily: "Calibri !important", color: "#fff",
    fontSize: "40px"}}>
        Kasko Sigortası
    </Grid>

    <Grid xs={12} sm={12} md={7} lg={7}>
<div className='container'>
      {/* <h2 className="heading">UygunuSec.com Hakkında Merak Edilen</h2>
      <Searchbar onSearchChange={handleSearchChange}/> 
      <section className='faq'>
       {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
      </section>       */}

      <div style={{background:"#FFFF", width:"80%", borderRadius:"12px" , height:"300px", marginLeft: "100px"}}>

        <div style={{paddingTop:"20px",
    color: "#515353",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "-0.16px"
    }}>
            <typography variant="body2">
            Bu bilgiler sana özel teklif hazırlayabilmemiz için gereklidir.
            </typography>
        </div>

        <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12}>
            <section
                  style={{
                   
                    paddingTop: "20px"
                  }}
                >
                  <Grid
                    container
                    style={{
                      
                      padding: "0",
                    }}
                  >
                    <Grid xs={12} sm={12} md={12} lg={12}>
                      <div>
                        <Formik
                          initialValues={{
                            tc: "",
                            service_codename: "",
                            submit: null,
                            additional_info: "",
                            phone: "",
                            email: "",
                          }}
                          validationSchema={Yup.object().shape({
                            phone: Yup.string()
                              .max(255)
                              .required("Parola Gereklidir."),
                            tc: Yup.string()
                              .max(255)
                              .required("tc Gereklidir."),
                            email: Yup.string()
                              .email("Geçerli bir e-posta adresi girin.")
                              .max(255)
                              .required("E-posta alanı boş geçilemez."),
                            additional_info: Yup.string()
                              .max(255)
                              .required("Plaka Gereklidir."),
                          })}
                          onSubmit={async (
                            values,
                            {
                              setErrors,
                              setStatus,
                              setSubmitting,
                              setEmail,
                              setPassword,
                            }
                          ) => {
                            try {
                              if (scriptedRef.current) {
                                setStatus({ success: true });
                                setSubmitting(false);

                                settcInfo(values.tc);
                                setPhoneInfo(values.phone);
                                setemailInfo(values.email);
                                setserviceInfo(values.service_codename);
                                setPlakaInfo(values.additional_info);
                              }
                            } catch (err) {
                              console.error(err);
                              if (scriptedRef.current) {
                                setStatus({ success: false });
                                setErrors({ submit: err.message });
                                setSubmitting(false);
                              }
                            }
                          }}
                        >
                          {({
                            errors,
                            handleBlur,
                            handleChange,
                            isSubmitting,
                            handleSubmit,
                            touched,
                            values,
                          }) => (
                            <form noValidate style={{display:"block"}}>
                              {firstControl == false ? (
                                <div>
                                  <FormControl
                                    fullWidth
                                    margin="dense"
                                    error={Boolean(
                                      (touched.tc && errors.tc) ||
                                        (touched.tc && errors.tc)
                                    )}
                                    sx={{ ...Theme.typography.customInput }}

                                   
                                  >
                                    <InputLabel htmlFor="outlined-adornment-email-login">
                                      TC No
                                    </InputLabel>
                                    <OutlinedInput
                                      id="tc"
                                      type="text"
                                      name="tc"
                                      label="Ruhsat sahibi TC No"
                                      value={values.tc}
                                      onBlur={handleBlur}
                                      onChange={(e) => {
                                        handleChange(e);
                                        settcInfo(e.target.value);
                                      }}
                                    />
                                    {touched.tc && errors.tc && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.tc}
                                      </FormHelperText>
                                    )}
                                  </FormControl>{" "}
                                  <br />
                                  <FormControl
                                    fullWidth
                                    margin="dense"
                                    error={Boolean(
                                      (touched.phone && errors.phone) ||
                                        (touched.phone && errors.phone)
                                    )}
                                    sx={{ ...Theme.typography.customInput }}
                                  >
                                    <InputLabel htmlFor="outlined-adornment-email-login">
                                      Cep Telefonu
                                    </InputLabel>
                                    <OutlinedInput
                                      id="phone"
                                      type="text"
                                      name="phone"
                                      value={values.phone}
                                      label="Ruhsat sahibi TC No"
                                      onBlur={handleBlur}
                                      onChange={(e) => {
                                        handleChange(e);
                                        setPhoneInfo(e.target.value);
                                      }}
                                    />

                                    {touched.phone && errors.phone && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                      >
                                        {errors.phone}
                                      </FormHelperText>
                                    )}
                                  </FormControl>
                                </div>
                              ) : secondControl ? (
                                <div>

                                  <FormControl
                                    fullWidth
                                    margin="dense"
                                    error={Boolean(
                                      (touched.service_codename &&
                                        errors.service_codename) ||
                                        (touched.service_codename &&
                                          errors.service_codename)
                                    )}
                                    sx={{ ...Theme.typography.customInput }}
                                  >
                                    <InputLabel htmlFor="outlined-adornment-email-login">
                                      Kasko Sigorta
                                    </InputLabel>
                                    <OutlinedInput
                                      id="service_codename"
                                      type="text"
                                      disabled={true}
                                      value={values.service_codename}
                                      name="service_codename"
                                      label="service_code"
                                      onBlur={handleBlur}
                                      onChange={(e) => {
                                        handleChange(e);
                                        setserviceInfo(e.target.value);
                                      }}
                                    />

                                    {touched.service_codename &&
                                      errors.service_codename && (
                                        <FormHelperText
                                          error
                                          id="standard-weight-helper-text--register"
                                        >
                                          {errors.service_codename}
                                        </FormHelperText>
                                      )}
                                  </FormControl>

                                  <FormControl
                                    fullWidth
                                    margin="dense"
                                    error={Boolean(
                                      (touched.additional_info &&
                                        errors.additional_info) ||
                                        (touched.additional_info &&
                                          errors.additional_info)
                                    )}
                                    sx={{ ...Theme.typography.customInput }}
                                  >
                                    <InputLabel htmlFor="outlined-adornment-email-login">
                                      Plaka Bilgisi
                                    </InputLabel>
                                    <OutlinedInput
                                      id="additional_info"
                                      type="text"
                                      value={values.additional_info}
                                      name="additional_info"
                                      label="additional_info"
                                      onBlur={handleBlur}
                                      onChange={(e) => {
                                        handleChange(e);
                                        setPlakaInfo(e.target.value);
                                      }}
                                      inputProps={{ maxLength: 12 }}
                                    />

                                    {touched.additional_info &&
                                      errors.additional_info && (
                                        <FormHelperText
                                          error
                                          id="standard-weight-helper-text--register"
                                        >
                                          {errors.additional_info}
                                        </FormHelperText>
                                      )}
                                  </FormControl>
                                </div>
                              ) : (
                                <div>
                                  <FormControl
                                    fullWidth
                                    margin="dense"
                                    error={Boolean(
                                      (touched.email && errors.email) ||
                                        (touched.email && errors.email)
                                    )}
                                    sx={{ ...Theme.typography.customInput }}
                                  >
                                    <InputLabel htmlFor="outlined-adornment-email-login">
                                      E-Posta Adresiniz
                                    </InputLabel>
                                    <OutlinedInput
                                      id="email"
                                      type="text"
                                      value={values.email}
                                      name="email"
                                      label="E-Posta Adresiniz"
                                      onBlur={handleBlur}
                                      onChange={(e) => {
                                        handleChange(e);
                                        setemailInfo(e.target.value);
                                      }}
                                    />

                                    {touched.email && errors.email && (
                                      <FormHelperText
                                        error
                                        id="standard-weight-helper-text--register"
                                        
                                      >
                                        {errors.email}
                                      </FormHelperText>
                                    )}
                                  </FormControl>
                                </div>
                              )}

                              <Box sx={{ mt: 2 }}>
                                <AnimateButton>
                                  <Button
                                    disableElevation
                                    disabled={
                                      contineuActive==false && firstControl==false && token==undefined  ? true : secondContinue==false && firstControl==true && token ==undefined ? true : thirdContinue ==false &&  token != undefined ? true : userStatus=="loading"? true : false
                                    }
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="success"
                                    style={{ width:"100%", borderRadius:"12px", background:"rgb(28, 123, 23)" }}
                                    onClick={(e) => {
                                      InfoContinue(e);
                                      InfoDataSubimit(e)
                                    }}
                                  >
                                    {secondControl == false
                                      ? "Devam"
                                      : "Kasko Teklifi Alın"}
                                  </Button>
                                </AnimateButton>
                              </Box>
                            </form>
                          )}
                        </Formik>
                      </div>
                    </Grid>
                  </Grid>
                </section>
            </Grid>

        </Grid>

      </div>
    </div>


</Grid>

</Grid>
        </Grid>

      </Grid>
    
    </div>
  );
};


TopHeaderKako.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(TopHeaderKako));
