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
    <div>

   
    {/* <section className="w-full " id="menu">
      <div className="w-full flex flex-col  justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2  before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-center">
        Sigorta Bizimle Başlayın.
        </p>
      </div>
    </section> */}

    <section>
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

              <Button>
                Hemen Teklif Al
              </Button>
            </div>
    </div>
  </Grid>
  
</Grid>

  </Grid>

  {/* <Grid xs={12} md={6} sm={6} lg={6} style={{borderRight:"1px solid black" , textAlign:"center"}} className={classes.dividePhonePart}>
<Grid container>
  <Grid xs={12} className={classes.compPart} >
   <img src={computerImage} alt="UygunuSec"  style={{maxHeight:"400px" , marginLeft: "auto",
  marginRight: "auto", display: "block"}}/>

  </Grid>
  <Grid xs={12} className={classes.subTitlePart}>

  <Typography variant="h4"  >
                Online Alın.
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti.</p>
                <Button>
                  Teklif Alın
                </Button>
</Grid>
</Grid>

  </Grid> */}

  {/* <Grid xs={12}  md={6} sm={6} lg={6} style={{borderLeft:"1px solid black" , textAlign:"center"}} className={classes.dividePhonePart}>
<Grid container>
  <Grid xs={12} className={classes.compPart}>
   <img src={phoneImage} alt="UygunuSec" style={{maxHeight:"280px" , marginLeft: "auto",
  marginRight: "auto", display: "block"}} />
  </Grid>
  <Grid xs={12} className={classes.subTitlePart}>
  <Typography variant="h4"  >
  Bir Temsilciyi Arayın.
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, corrupti.</p>
                <Button>
                  Teklif Alın
                </Button>
</Grid>
</Grid>
  </Grid> */}
</Grid>

<Typography variant="h4" style={{textAlign:"center" , justifyContent:"center"}} >
  
    Sigortada Güvenin Adresi.
                </Typography>
    <div className="text-center">
      <p>Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
        
      </p>
    </div>

<Grid xs={12}>

<Grid container style={{ margin:"90px",marginLeft: "auto",
  marginRight: "auto", paddingLeft:"150px", paddingRight:"150px", paddingBottom:"150px" }}>
      <Grid xs={12} md={2} sm={2} className={classes.kategoriImage} >
          <img src="https://insuranlife.1onestrong.com/wp-content/uploads/2022/03/building.png" alt="" className={classes.ImageSector}/>
      </Grid>
      <Grid xs={12} md={2} sm={2} className={classes.kategoriImage}>
          <img src="https://insuranlife.1onestrong.com/wp-content/uploads/2022/03/building.png" className={classes.ImageSector} alt="" />
      </Grid>
      <Grid xs={12} md={2} sm={2} className={classes.kategoriImage}>
          <img src="https://insuranlife.1onestrong.com/wp-content/uploads/2022/03/building.png" alt="" className={classes.ImageSector}/>
      </Grid>
      <Grid xs={12} md={2} sm={2} className={classes.kategoriImage}>
          <img src="https://insuranlife.1onestrong.com/wp-content/uploads/2022/03/building.png" alt="" className={classes.ImageSector} />
      </Grid>
      <Grid xs={12} md={2} sm={2} className={classes.kategoriImage}>
          <img src="https://insuranlife.1onestrong.com/wp-content/uploads/2022/03/building.png" alt="" className={classes.ImageSector} />
      </Grid>
      <Grid xs={12} md={2} sm={2} className={classes.kategoriImage}>
          <img src="https://insuranlife.1onestrong.com/wp-content/uploads/2022/03/building.png" alt=""  className={classes.ImageSector}/>
      </Grid>

    </Grid>

</Grid>
   


    <Grid item xs={12}>

      {/* here is the float part */}

      {/* <Grid container>
        <Grid>


        </Grid>

      </Grid> */}


      {/* <div className='header section__padding'>

      <div className="header-content" >
        <div style={{
          background: "linear-gradient(315deg, #f8ef42 0%, #0fd64f 74%)",
          width: "100%",
          height: "300px",
          borderRadius:"25px",
          display:"flex",
          alignItems:"center",
          justifyContent: "space-around",
          margin:"auto"
        }}>
        <img className="shake-vertical" src="https://insuranlife.1onestrong.com/wp-content/uploads/2022/03/building.png" alt="" style={{
width: "10%",
        }} /><br />
          <h1  style={{ 
 fontFamily: "var(--font-family)",
 width:"70%",
 fontWeight:"bold",
 fontSize: "48px",
 lineHeight: "105.7%",
 color: "#FFFFFF",
 padding: "1rem",
 marginLeft: "2rem"

          }}>İndirimli Sigorta tarifelerini karşılaştırın!</h1>
        </div>
      </div>
      </div> */}

      {/* end of float part */}



    </Grid>

    </section>

    <section>
      {/* start of float part */}



      {/* end of float part */}
    </section>

  
    </div>


  );
};


MenuContainer.protoTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(MenuContainer));
