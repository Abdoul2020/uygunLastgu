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

// react mui here
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Searchbar from "./Searchbar";
import Question from "./Question";


const styles={
  
  
}





const CarouselMain = (props) => {
  const { classes } = props;

  

  //useState here
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  //useEffect
  React.useEffect(() => {
    const results = props.data.filter(item=>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  
  
  return (

    <div style={{width:"100%", }}>
<div className='container'>
      <h2 className="heading">UygunuSec.com Hakkında Merak Edilen</h2>
      <Searchbar onSearchChange={handleSearchChange}/> 
      <section className='faq'>
       {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
      </section>      
    </div>
    </div>
  );
};


CarouselMain.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(CarouselMain));
