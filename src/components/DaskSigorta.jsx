import React from 'react'
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { withStyles } from '@material-ui/styles';
import PropTypes from "prop-types";
import { motion } from "framer-motion";//here is for the tailwind
import { red } from '@material-ui/core/colors';
import heroimg from "../img/herohere.webp"
import services1 from "../img/service_1.svg"
import logoref from "../img/esure.webp"
import logorefbir from "../img/love.webp"

import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

import  logo34 from "../img/logo35.jpeg"
import TopHeaderKako from './kaskoSigorta/TopHeaderKako';
import KaskoContain from './kaskoSigorta/KaskoContain';
import Menu from './kaskoSigorta/MultipleFaq.jsx/Menu';
import BigCarousel from './kaskoSigorta/BigCarousel';


// background:"#28b23f",

const styles={

}


const DaskSigorta = (props) => {


  const {classes}=props;
  

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
       <TopHeaderKako/>

       <KaskoContain/>

       <Menu/>

       <BigCarousel/>

    </div>
  )
}

DaskSigorta.protoTypes={
  classes: PropTypes.object.isRequired,


}


export default (withStyles(styles)(DaskSigorta));