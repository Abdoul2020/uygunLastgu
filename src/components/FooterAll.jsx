
//import { withStyles } from '@material-ui/core'
import React from 'react'
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Logo from "../img/logo34.jpeg";




const styles={


}


const FooterAll = (props) => {

    const { classes } = props;
  return (


    <div style={{width:"100%"}}>

        {/* desktop part */}
<section style={{background:"black"}}>
    <Grid container>
        <Grid item xs={4} >
            <div >
            <img src={Logo} alt="" style={{maxWidth:"100px",margin:"0 auto"}} />
            </div>
            <br />
           <span>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ab.
           </span>
        </Grid>
        <Grid xs={4} >

           <h1>Ürünlerimiz</h1>
           <ul>
            <li>
                In all the favorite
            </li>
           </ul>
             
        </Grid>


    </Grid>
</section>
    </div>


  )
}

FooterAll.protoTypes = {

    classes: PropTypes.object.isRequired,

  };


export default  (withStyles(styles)( FooterAll))