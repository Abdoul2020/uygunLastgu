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


//carousel burada heer
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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





const CarouselMain = (props) => {
  const { classes } = props;

  //change Input here

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 6 },
};

const items = [
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,

  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,

  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,

  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,

  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,

  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,

  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic.svg" onDragStart={handleDragStart} role="presentation" />,

];
  

  
  return (

    <div style={{width:"100%", }}>

        <Grid container>
            <Grid xs={12} sm={12} md={12} lg={12} >
                
                   

                    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"



        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
    />
                    


            </Grid>

        </Grid>


        
    </div>
   


  );
};


CarouselMain.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(CarouselMain));
