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

//import css
import "./MenuContainer.css"


// Images
import computerImage from "../img/computer1.png"
import phoneImage from "../img/phoneCall.png"
import { height } from "@mui/system";


const styles={
  subTitlePart:{
    marginTop:"20px"
  },
  dividePhonePart:{
    padding:"10px"
  },
  compPart:{
    padding:"20px"
  },
  ImageSector:{
    width:"100px",
    height:"100px",
 marginLeft: "auto",
  marginRight: "auto", 
  display: "block"
  },
  kategoriImage:{
    textAlign:"center",
    justifyContent:"center"
  },

section__padding:{
  display: "flex",
  flexDirection: "column",
  alignItems:"center",
  justifyContent:"center",
  margin: "auto",

},


}


const MenuContainer = (props) => {
  const { classes } = props;
  
  return (
    <div style={{width:"100%", background:"#FFFF", marginBottom:"50px", marginTop:"50px"}}>
    <Grid container>
    <Grid xs={12} sm={12} md={12} lg={12}>

<Grid container>

  <Grid item xs={12} sm={6} md={6} lg={6} 
  
  // style={{ backgroundImage: `url(${backPhone})`}}
  
  >

    <div style={{height:"750px", width:"100%"}}>
    <img src={phonePart} alt="" style={{
      maxWidth: "100%",
      maxHeight: "100%",
      display: "block",
    margin: "0 auto"
    }} />
    </div>


  </Grid>

  <Grid item xs={12} sm={6} md={6} lg={6} marginLeft={{xs:"0px", sm:"-50px", md:"-90px", lg:"-100px"}} padding={{xs:"20px", sm:"", md:"",lg:""}} marginTop={{xs:"0px", sm:"180px", md:"250px", lg:"250px"}}>

    <div  >
            
            <div   >
              <h2 className="text-2xl font-semibold  text-headingColor relative transition-all ease-in-out duration-100 ">
              Hangi ürün bana en uygun diye düşünme, biz senin için en net teklifleri sıraladık bile!
              </h2>
              <br />
              <p>
              Tüm teminatları tek tek inceledik, ihtiyaçlarına en uygun olan teminatları belirledik. Sana özel kapsamlı ve fiyatı uygun ürün önerileri hazırladık.
              </p>

              <div className=""
               style={{
                
  position: "relative",
  float:"left",
  marginTop:"40px"

              }}
              >
              <button
                type="button"
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                
                style={{
                  width: "auto !important",
    height: "auto !important",
    padding: "18px 90px",
    lineHeight: "17px",
    transformOrigin: "center center",
    fontWeight: "600!important",
    border:"none",
    margin:"auto",
    fontSize: "18px",
    background:"rgb(28, 123, 23)",
    color:"#FFFF"
   
                }}
                
              >
                 BANA ULAŞIN
              </button>
             
              </div>
            </div>
    </div>
  </Grid>
  
</Grid>

  </Grid>

  
</Grid>

   
    </div>

  );
};


MenuContainer.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(MenuContainer));
