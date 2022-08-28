import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import ArrowForward from "@material-ui/icons/ArrowForward";
//import logo1 from '../images/humanicon.gif';
import Register3 from "./Register3";
import styles from "./styles/Login4Style";
import Type from "../nePage/ScssComponent/Typography.scss";

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
              <Hidden smDown>
                <Grid item md={4} className={classes.welcomeWrap}>
                  {" "}
                  {/* Welcome Login */}{" "}
                  <div className={classes.welcome}>
                    {" "}
                    {/* <div className={classes.welcomeContent}>
                                    <div className="brand">
                                        <img src={logo1} alt="UygunSec" />
                                        
                                      </div>
                                      <Typography variant="h1">
                                        <span className={Type.light} >Hoşgeldiniz!</span>
                                      </Typography>
                                      <Typography variant="body2" className={classes.brandText}>
                                        <span >
                                        Bizimle bağlantıda kalmak için lütfen kişisel bilgilerinizle girin.
                                        </span>
                                      </Typography>
                                    </div> */}{" "}
                    <ArrowForward className={classes.decoBottom} />{" "}
                  </div>{" "}
                </Grid>{" "}
              </Hidden>{" "}
              <Grid item md={8} sm={6} xs={11}>
                {" "}
                {/* ----------------------------------------------------------------------*/}{" "}
                {/* Load Login Form */} <Register3 />
              </Grid>{" "}
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
