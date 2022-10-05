import React, { useEffect, useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";




//import css
import "../MenuContainer.css"


const styles={
  
}



const KaskoContain = (props) => {
  const { classes } = props;

  
  
  return (

    <div style={{width:"100%", }}>
        <Grid container>
            <Grid xs={12} sm={12}  md={12} lg={12}>
                <Grid xs={12} sm={12}  md={4} lg={4} style={{textAlign:"center",  fontFamily:"Calibri !important" }}>
                <div style={{
                    fontFamily:"Calibri",
                    color:"#2e3045" ,
                    fontWeight: "inherit",
    fontStyle: "inherit",
    fontSize:"100%",
    marginTop:"25px"
                }}>
                    Ana Sayfa {">"} Ürünler {">"} Kasko Sigortası
                </div>
                </Grid>
                

            </Grid>

        </Grid>
<div className='containerContain' style={{background:"#FFFF", marginBottom:"50px", marginTop:"50px"}} >
      {/* <h2 className="heading">UygunuSec.com Hakkında Merak Edilen</h2>
      <Searchbar onSearchChange={handleSearchChange}/> 
      <section className='faq'>
       {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
      </section>       */}

<div>
<h4 className="heading" style={{float:"left"}}>Araç Kasko Sigortası</h4>
</div> <br /><br /><br />

<div>
<Typography variant="h6">
Araç Kasko Sigortası Nedir?
</Typography>
</div>



<div style={{
    fontFamily: "Inter,sans-serif!important",
    fontWeight: "400 !important"
    ,fontSize:"16px"
}}>
    <Typography variant="body1" style={{
    fontFamily: "Inter,sans-serif!important",
    fontWeight: "400 !important"
    ,fontSize:"16px"
}}>
    Kasko, hasar ve kaza durumlarında aracında ortaya çıkan zarar masraflarını karşılar. Bu sayede yüksek hasar masraflarına karşı bütçeni korur. Kasko sigortan aşağıdaki durumlarda devreye girer;
    </Typography>
</div>

<div>
    <ul className="ulList" style={{
    fontFamily: "Inter,sans-serif!important",
    fontWeight: "400 !important"
    ,fontSize:"16px"
}}>
        <li>
        Aracının başka bir araçla çarpışması
        </li>
        <li>
        Aracına başka bir aracın ya da yabancı bir maddenin çarpması
        </li>
        <li>
        Aracını iraden dışında bir yere çarpman
        </li>
    </ul>
</div>

<div>
<Typography variant="h5" style={{
    fontFamily: "Inter,sans-serif!important",
    fontWeight: "400 !important"
    ,fontSize:"16px"
}}>
Online Kasko Sigortası Nasıl Alınır?
</Typography>
</div>

<div className=""
               style={{
                
  position: "relative",
 
  marginTop:"40px"

              }}
              >
                <Link to="/kasko_sigortasi/form/temel_Bilgiler" target="_blank">
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
    fontSize: "18px",
    background:"rgb(28, 123, 23)",
    color:"#FFFF"
   
                }}
              >
                 Kasko Teklifi Alın
              </button>
                </Link>
             
             
              </div>



    </div>
    </div>
  );
};


KaskoContain.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(KaskoContain));
