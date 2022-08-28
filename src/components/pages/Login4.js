import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
//import logo from '../images/logo.svg';
import Login3 from "./Login3";
import styles from "./styles/Login4Style";

class Login4 extends React.Component {
  state = {
    valueForm: [],
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid
            container
            spacing={24}
            alignItems="center"
            direction="row"
            justify="center"
          >
            <Grid
              item
              container
              justify="center"
              spacing={0}
              className={classes.loginWrap}
            >
              <Grid item md={8} sm={6} xs={11}>
                {" "}
                {/* ----------------------------------------------------------------------*/}{" "}
                {/* Load Login Form */} <Login3 />
              </Grid>{" "}
              <Hidden smDown>
                <Grid item md={4} className={classes.welcomeWrap}>
                  {" "}
                  {/* Welcome Login */}{" "}
                  <div className={classes.welcome}>
                    {" "}
                    {/* <div className={classes.welcomeContent}>
                                      <div className={classes.brand}>
                                        <img src={logo} alt="hello" />
                                        <h3>Abdoul</h3>
                                      </div>
                                      <Typography variant="display2">
                                        <span >Hello there,</span>
                                      </Typography>
                                      <Typography variant="title" className={classes.brandText}>
                                        <span >
                                          welcome to UygunSec
                                        </span>
                                      </Typography>
                                    </div> */}
                    <ArrowBack className={classes.decoBottom} />{" "}
                  </div>{" "}
                </Grid>{" "}
              </Hidden>
            </Grid>{" "}
          </Grid>{" "}
        </div>{" "}
      </div>
    );
  }
}

Login4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login4);
