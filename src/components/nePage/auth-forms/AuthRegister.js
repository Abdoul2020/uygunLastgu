import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "../hooks/useScriptRef";
// import Google from "../../images/logo0.jpeg";
import AnimateButton from "../ui-component/extended/AnimateButton";
import { strengthColor, strengthIndicator } from "../utils/password-strength";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from "@mui/material/Autocomplete";

//services part from there
import { registerWithEmailAndPassword } from '../../../services/firebase';
import { toastify } from '../../../services/toastify';
import { selectUser } from '../../../services/redux/userSlice'








// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
  const theme = useTheme();


  //const firebaseAuth = getAuth(app);
  
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  

  const googleHandler = async () => {
    console.error("Register");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("123456");
  }, []);

  //Check the text field only take Letters

  const [letterValue, setLettevalue] = useState("");
  const [letterSoyadValue, setLetteSoyadvalue] = useState("");
  const onLetterOnly = (e) => {
    const re = /^[a-zA-Z]+$/g;
    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setLettevalue(e.target.value);
      console.log(letterValue);
    }
  };
  //soyad label
  const onLetterOnlySoyad = (e) => {
    const re = /^[a-zA-Z]+$/g;
    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setLetteSoyadvalue(e.target.value);
      console.log(letterSoyadValue);
    }
  };

  //check the phoneNumber only take number
  const [valuee, setValuee] = useState("");
  const onChange = (e) => {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setValuee(e.target.value);
      console.log(valuee);
    }
  };

  const numbersAll = [
    {
      value: "530",
      label: "530",
    },
    {
      value: "531",
      label: "531",
    },
    {
      value: "532",
      label: "532",
    },
    {
      value: "533",
      label: "533",
    },
    {
      value: "534",
      label: "534",
    },
    {
      value: "535",
      label: "535",
    },
    {
      value: "536",
      label: "536",
    },
    {
      value: "537",
      label: "537",
    },
    {
      value: "538",
      label: "538",
    },
    {
      value: "539",
      label: "539",
    },
    {
      value: "501",
      label: "505",
    },
    {
      value: "506",
      label: "507",
    },
    {
      value: "551",
      label: "551",
    },
    {
      value: "552",
      label: "552",
    },
    {
      value: "553",
      label: "553",
    },
    {
      value: "554",
      label: "554",
    },
    {
      value: "555",
      label: "555",
    },
    {
      value: "559",
      label: "559",
    },
    {
      value: "540",
      label: "540",
    },
    {
      value: "541",
      label: "541",
    },
    {
      value: "542",
      label: "542",
    },
    {
      value: "543",
      label: "543",
    },
    {
      value: "544",
      label: "544",
    },
    {
      value: "545",
      label: "545",
    },
    {
      value: "546",
      label: "546",
    },
    {
      value: "547",
      label: "547",
    },
    {
      value: "548",
      label: "548",
    },
    {
      value: "549",
      label: "549",
    },
  ];

  

  //show passoword
  const [password, setPassword] = React.useState("");
  const [validPassoword, setValidPassword] = React.useState(false);

  

  const user = useSelector(selectUser);
  console.log("usedrInfo:",user);
//User Register function from here..
const navigate = useNavigate();
//useEffect(() => { if (user.uid) { navigate("/profile"); toastify({ type: 'info', message: 'Lutfen suanki kullanicidan cikis yapiniz.' }); } });
 
const userDataSubmit = (event) => {
    //event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("tıklandı ok regisater")
    registerWithEmailAndPassword(
      data.get("email"),
      data.get("password"),
      data.get("firstName"),
      data.get("lastName"),
      data.get("phoneNumber")
    )
      .then((result) => {
        console.log(result)
        if (result === "Success") {
          toastify({
            type: "success",
            message: "Email Dogrulama linki gonderildi, tekrar giriş yapınız.",
          });
          navigate("/login");
        } else {
          throw new Error("Bilinmeyen Bir Hata Olustu");
        }
      })
      .catch((error) => {
        toastify({ type: "error", message: error });
      });
  };

  //end of function...

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              E-posta adresiyle kaydolun.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: "",
          password: "",
          phoneNumber: "",
          fname: "",
          lname: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Geçerli bir e-posta adresi girin.")
            .max(255)
            .required("E-posta alanı boş geçilemez."),
          password: Yup.string().max(255).required("Şifre gereklidir."),
          phoneNumber: Yup.string()
            .max(7)
            .required("Telefon Numara alanı boş geçilemez."),
          fname: Yup.string().required("Ad alanı boş geçilemez."),
          lname: Yup.string().required("Soyad alan boş geçilemez"),
        })}
        // onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        //   try {
        //     if (scriptedRef.current) {
        //       setStatus({ success: true });
        //       setSubmitting(false);
        //     }
        //   } catch (err) {
        //     console.error(err);
        //     if (scriptedRef.current) {
        //       setStatus({ success: false });
        //       setErrors({ submit: err.message });
        //       setSubmitting(false);
        //     }
        //   }
        // }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate {...others} onSubmit={userDataSubmit} >
            <FormControl
              fullWidth
              error={Boolean(
                (touched.fname && errors.fname) ||
                  (touched.lname && errors.lname)
              )}
              sx={{ ...theme.typography.customInput }}
            >
              {/* spacing={matchDownSM ? 0 : 2} */}
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Adınız"
                    margin="normal"
                    name="firstName"
                    type="text"
                    defaultValue=""
                    id="firstName"
                    value={letterValue}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      onLetterOnly(e);
                    }}
                    inputProps={{}}
                  />
                  {touched.fname && errors.fname && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.fname}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Soyadınız"
                    margin="normal"
                    name="lastName"
                    type="text"
                    id="lastName"
                    defaultValue=""
                    value={letterSoyadValue}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      onLetterOnlySoyad(e);
                    }}
                    inputProps={{}}
                    sx={{ ...theme.typography.customInput }}
                  />
                  {touched.lname && errors.lname && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.lname}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="email">
                E-Posta Adresiniz
              </InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                value={values.email}
                name="email"
                label="E-Posta"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
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

            <FormControl
              fullWidth
              error={Boolean(touched.phoneNumber && errors.phoneNumber)}
              sx={{ ...theme.typography.customInput }}
            >
              {/* spacing={matchDownSM ? 0 : 2} */}
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="phoneHeader"
                    select
                    label="Seçiniz"
                    margin="normal"
                    fullWidth
                    name="phoneHeader"
                  >
                    {numbersAll.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                  id="phoneNumber"
                    fullWidth
                    type="text"
                    label="Numara"
                    margin="normal"
                    name="phoneNumber"
                    defaultValue=""
                    onBlur={handleBlur}
                    value={valuee}
                    onChange={(e) => {
                      handleChange(e);
                      onChange(e);
                    }}
                    inputProps={{ maxLength: 7 }}
                  />

                  {touched.phoneNumber && errors.phoneNumber && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text--register"
                    >
                      {errors.phoneNumber}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-password-register">
                Parola
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                label="Parola"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-register"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box
                        style={{ backgroundColor: level?.color }}
                        sx={{ width: 85, height: 8, borderRadius: "7px" }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Şartlar ve Koşulları &nbsp;
                      <Typography
                        variant="subtitle1"
                        component={Link}
                        to="#"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"
                      >
                        kabul edin.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="success"
                  onClick={userDataSubmit}
                >
                  Üye Ol
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseRegister;
