import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import Hidden from "@material-ui/core/Hidden";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
//import logo from '../images/logo.svg';
import ArrowForward from "@material-ui/icons/ArrowForward";

// project imports
import AuthWrapper1 from "../nePage/AuthWrapper1";
import AuthCardWrapper from "../nePage/AuthCardWrapper";
import AuthRegister from "../nePage/auth-forms/AuthRegister";
import Logo from "../nePage/ui-component/Logo";
import AuthFooter from "../nePage/ui-component/cards/AuthFooter";

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Register = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="/">
                      <Logo />
                    </Link>{" "}
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.success.main}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                            textAlign="center"
                          >
                            Üye Olun.{" "}
                            
                          </Typography>{" "}
                        </Stack>{" "}
                      </Grid>{" "}
                    </Grid>{" "}
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <AuthRegister />
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      xs={12}
                    >
                      <Typography
                        component={Link}
                        to="/login"
                        variant="subtitle1"
                        sx={{ textDecoration: "none" }}
                        color="#388ab3"
                      >
                        Üye iseniz, Üye Girişi.{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>{" "}
                </Grid>{" "}
              </AuthCardWrapper>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Grid>{" "}
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          {" "}
        </Grid>{" "}
      </Grid>{" "}
    </AuthWrapper1>
  );
};

export default Register;
