import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import Slider from 'infinite-react-carousel';

//import css
import "../MenuContainer.css"




const styles={
  
}





const BigCarousel = (props) => {
  const { classes } = props;

  //change Input here

  


  

  
  return (

    <div style={{width:"100%",marginTop:"50px", marginBottom: "50px" }}>

        <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12} >
                
                   

            <Slider dots autoplay>
    <div>
      <img src="https://www.turkiyesigorta.com.tr/images/default-source/ana-sayfa/slider/banner-2.png" alt="" />
    </div>
    <div>
    <img src="https://www.turkiyesigorta.com.tr/images/default-source/ana-sayfa/slider/cocugunuzun-gelecegi-simdiden-gucleniyor.png1" alt="" />
    </div>
    <div>
    <img src="https://www.turkiyesigorta.com.tr/images/default-source/ana-sayfa/slider/banner-2.png" alt="" />
    </div>
    <div>
    <img src="https://www.turkiyesigorta.com.tr/images/default-source/ana-sayfa/slider/cocugunuzun-gelecegi-simdiden-gucleniyor.png1" alt="" />
    </div>
    <div>
    <img src="https://www.turkiyesigorta.com.tr/images/default-source/ana-sayfa/slider/banner-2.png" alt="" />
    </div>
  </Slider>

{/* autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls */}
                    


            </Grid>

        </Grid>


        
    </div>
   


  );
};


BigCarousel.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(BigCarousel));
