import React from "react";
import Delivery from "../img/traffic.svg";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { Link } from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";
import { Grid } from "@mui/material";
import { ClassNames } from "@emotion/react";

// owl carousel here
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const HomeContainer = () => {
  return (
    <Grid conatiner xs={12} md={12} sm={12} lg={12}  style={{background:"#28b23f", width:"100%"}}>
      <Grid container>
        <Grid
          xs={12}
          md={6}
          sm={6}
          lg={6}
          className="py-2 flex-1  flex-col  justify-center gap-6 hidden sm:flex"
          // style={{ textAlign: "center" }}
          
        >
          <Grid container>
            <Grid
              xs={12}
              md={12}
              sm={12}
              lg={12}
              
            >
              <div
                className="flex items-center gap-2  bg-orange-100 px-4 py-1 rounded-full"
                style={{
                  width:"50%",
                  height: "auto",
   margin:"0 auto",
    padding: "10px",
    position: "relative",

    top:"50%"
                }}
              >
              <p className="text-base text-orange-500 font-semibold">
                UgunuSec Sigorta
              </p>
              <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl ml-auto">
                <img
                  src={Delivery}
                  className="w-full h-full object-contain"
                  alt="delivery"
                />
              </div>

              </div>
             
              {/* className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor" */}
              {/* className="text-orange-600 text-[3rem] lg:text-[5rem]" */}
            </Grid>
            <Grid xs={12} md={12} sm={12} lg={12} style={{textAlign:"center", justifyContent:"center"}}>

              <h1 className=" text-[2.5rem]  font-bold tracking-wide text-white " style={{textAlign:"right !important"}}>
              Sigortada Güvenin Adresi
              </h1>
              {/* <p className="text-[2.5rem]  font-bold tracking-wide text-white">
                Sigortada Güvenin
                <span >
                  Adresi
                </span>
              </p> */}
              <p className="text-white items-center justify-center">
              Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
              </p>
              <div className="flex"
               style={{
                width:"50%",
                height: "auto",
 margin:"0 auto",
  padding: "10px",
  position: "relative",
  marginTop:"50px"
              }}
              >
              <button
                type="button"
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  minWidth: "260px"
                }}
              >
                <MdLocalGroceryStore className="mt-1"/> &nbsp; Teklif Al
              </button>
              <button
                type="button"
                className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 ml-4"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  minWidth: "260px"
                }}
              >
                <MdLocalGroceryStore className="mt-1"/> &nbsp; Hemen Ara
              </button>
              </div>
            </Grid>

         
          </Grid>
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={6}
          sm={6}
          className="py-2 flex-1 flex items-center relative"
        >
          <Grid conatiner xs={12} md={12} sm={12} lg={12}
         paddingRight={{xs:"0" ,sm:"50px", md:"0" ,lg:"100px"}}
          >

{/* <img
              src={HeroBg}
              className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
              alt="hero-bg_UygunuSec"
            /> */}

            
            <OwlCarousel    className="owl-theme-home "   navText={['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']} loop
        autoplay margin={10} items={1} nav >
            
            <img
              src={HeroBg}
              className="ml-auto h-420 w-full lg:w-auto lg:h-650 "
              alt="hero-bg_UygunuSec"
              
            />
            <img
              src={HeroBg}
              className=" ml-auto h-420 w-full lg:w-auto lg:h-650 "
              alt="hero-bg_UygunuSec"
            />
            <img
              src={HeroBg}
              className=" ml-auto h-420 w-full lg:w-auto lg:h-650 "
              alt="hero-bg_UygunuSec"
              
            />
            
            </OwlCarousel>
            

            <Grid container xs={12} md={12} sm={12} lg={12} 
            className="w-full h-full left-0 absolute top-0 items-center justify-center py-4  flex-wrap xl:pl-44 z-999"

            style={{zIndex:"1"}}
            >
           
              {heroData &&
                heroData.map((n) => (

                  <Grid  key={n.id}
                  xs={6} md={6} sm={6} lg={6}
                 
style={{textAlign:"center"

}}
                  >

                    <Grid
                     className="  bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
                   
                     width={{sm:"150px", md:"200px" ,xs:"150px", lg:"200px"}}
                     margin={{sm:"auto !important" , md:"auto !important", xs:"auto !important", lg:"auto !important"}}
                    >

                  
 <Link to={n.linkUrl}>                
<img
  src={n.imageSrc}
   className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
  alt="UygunuSec"
  style={{marginLeft: "auto",
  marginRight: "auto",
  display: "block"}}
/>
<p className="text-base lg:text-sm font-semibold text-textColor mt-2 lg:mt-4">
  {n.name}
</p>

</Link>
</Grid>
                  </Grid>
                 
                ))}
                 
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
