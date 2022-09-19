import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";
import AnimateButton from "../../nePage/ui-component/extended/AnimateButton";
import Logo from "../../../img/logo34.jpeg";

import useScriptRef from "../../nePage/hooks/useScriptRef";
import { useTheme } from "@mui/material/styles";

//formik
import * as Yup from "yup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


// redux connection
import { useSelector, useDispatch } from 'react-redux';
import {sendOfferToAsync} from "../../../services/redux/userSlice";



//redux
//redux toolkit gerekenler

//cookies control
import Cookies from 'universal-cookie'; //cookies

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
import Header from "../../Header";

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

const Temel_Bilgiler = (props) => {
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
    <div>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12}>
          {/* desktop & tablet */}
          <div className="hidden lg:flex w-full h-full items-center justify-between">
            <Grid container>
              <Grid
                item
                xs={2}
                sm={2}
                md={2}
                lg={2}
                style={{ background: "#ffff", height: "100vh" }}
              >
                <div
                  style={{
                    margin: "0 auto",
                    padding: "20px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <div className={classes.ImageLogo}>
                      <img src={Logo} alt="" />
                    </div>
                    <div>
                      <Typography variant="h6">Uygunusec</Typography>
                    </div>
                  </div>

                  <div className={classes.secondBaseInfo}>
                    <ul>
                      <li className={classes.firstlimap}>
                        <div style={{ display: "flex" }}>
                          <div>
                            <span className={classes.spanBullet}></span>
                          </div>
                          &nbsp;&nbsp;
                          <div>
                            <Typography
                              variant="h6"
                              style={{ color: " black" }}
                            >
                              Teklif Bilgileri
                            </Typography>
                          </div>
                          <div>
                            <KeyboardArrowUpIcon
                              style={{ color: "black", margin: "3px" }}
                            />
                          </div>
                        </div>

                        <ul style={{ padding: "23px 0 0 15px" }}>
                          <li className={classes.lisysmbol}>
                            {" "}
                            <div style={{ display: "flex" }}>
                              <div>
                                <span
                                  className={classes.spanBullet}
                                  style={{ marginTop: "0px !important" }}
                                ></span>
                              </div>
                              &nbsp;&nbsp;
                              <div>
                                <Typography>Temel Bilgiler</Typography>
                              </div>
                            </div>{" "}
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div style={{ display: "flex" }}>
                          <div>
                            <span className={classes.spanBullet}></span>
                          </div>
                          &nbsp;&nbsp;
                          <div>
                            <Typography variant="h6">Araç Bilgileri</Typography>
                          </div>
                          {secondControl   ? (

                            <div   onClick={()=>setopenDownButton(!openDownButton)}>
                              <KeyboardArrowUpIcon
                                style={{ color: "black", margin: "3px" , cursor:"pointer"}}
                              />
                            </div>
                          ) : (
                            <div onClick={()=>setopenDownButton(!openDownButton)}>
                              <KeyboardArrowDownIcon
                                style={{ color: "black", margin: "3px" , cursor:"pointer" }}
                                
                              />
                            </div>
                          )}
                        </div>

                        {secondControl || openDownButton ? (
                          <ul style={{ padding: "23px 0 0 15px" }}>
                            <li className={classes.lisysmbol}>
                              <div style={{ display: "flex" }}>
                                <div>
                                  <span
                                    className={classes.spanBullet}
                                    style={{ marginTop: "0px !important" }}
                                  ></span>
                                </div>
                                &nbsp;&nbsp;
                                <div>
                                  <Typography>Plaka Bilgisi</Typography>
                                </div>
                              </div>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    </ul>
                  </div>

                  <div style={{ marginTop: "300px" }}>
                    <Grid container>
                      <Grid xs={12} sm={12} md={12} lg={12}>
                        <div>
                          <Typography variant="subtitle2">
                            © UygunuSec.com
                          </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10}>
                <section
                  style={{
                    minHeight: "100vh",
                    paddingTop: "12vh",
                    paddingBottom: "40px",
                  }}
                >
                  <Grid
                    container
                    style={{
                      marginLeft: "117px",
                      maxWidth: "450px",
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
                            <form noValidate>
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
                                    style={{ float: "right" }}
                                    onClick={(e) => {
                                      InfoContinue(e);
                                      InfoDataSubimit(e)
                                    }}
                                  >
                                    {secondControl == false
                                      ? "Devam"
                                      : "Teklif Al"}
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
        </Grid>
      </Grid>
    </div>
  );
};

Temel_Bilgiler.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Temel_Bilgiler);
