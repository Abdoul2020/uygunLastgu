import { useState, useEffect } from "react";

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
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "../hooks/useScriptRef";
import AnimateButton from "../ui-component/extended/AnimateButton";
import { useNavigate } from "react-router-dom";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//import Google from "../images/logo0.jpeg";

//services part from there
import { registerWithEmailAndPassword } from "../../../services/firebase";
import { toastify } from "../../../services/toastify";
import { selectUser } from "../../../services/redux/userSlice";

//redux toolkit gerekenler
import { useSelector, useDispatch } from "react-redux";
//redux toolKit
import { loginUserAsync } from "../../../services/redux/loginSlice";

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();

  //redux toolkit getirme
  const dispatch = useDispatch();
  const navigate = useNavigate();

  ///const user = useSelector(state => state.loginSlice.value);
  const registerStatus = useSelector((state) => state.loginSlice.status);
  // const registerError = useSelector(state => state.loginSlice.errors);

  useEffect(() => {
    if (registerStatus == "success") {
      console.log(registerStatus);
      //router.push("/select-profile");
      //dispatch(statusReset());
     // navigate("/");
    } else if (registerStatus == "error") {
    }
  }, [registerStatus]);

  // value input from here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoginDataData = {
    email: email,
    password: password,
  };
  useEffect(() => {
    console.log("login Data:", userLoginDataData);
  }, [userLoginDataData]);



  async function loginUser(e) {
    dispatch(loginUserAsync({email:e.email,password:e.password})).then(()=>{
        navigate("/");

    })
    console.log("giri?? yap??ld??");
  }

  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  // const customization = useSelector((state) => state.customization);
  const [checked, setChecked] = useState(true);

  const googleHandler = async () => {
    console.error("Login");
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">
              E-posta adresiyle oturum a????n.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: email,
          password: password,
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Ge??erli bir e-posta olmal??")
            .max(255)
            .required("Email gereklidir."),
          password: Yup.string().max(255).required("Parola Gereklidir."),
        })}
        onSubmit={async (
          values,
          { setErrors, setStatus, setSubmitting, setEmail, setPassword }
        ) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
              loginUser(values)
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
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate {...others}  onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              error={Boolean(touched.email && errors.email)}
              sx={{ ...theme.typography.customInput }}
              margin="dense"
            >
              <InputLabel htmlFor="outlined-adornment-email-login">
                E - Posta Adresiniz
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="E - Posta Adresiniz"
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-email-login"
                >
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ ...theme.typography.customInput }}
              margin="dense"
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Parola
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
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
                label="Parola"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                  />
                }
                label="Beni Hat??rla"
              />
              <Typography
                variant="subtitle1"
                color="#388ab3"
                sx={{ textDecoration: "none", cursor: "pointer" }}
              >
                ??ifremi Unuttum?
              </Typography>
            </Stack>
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
                >
                  ??ye Giri??i
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
