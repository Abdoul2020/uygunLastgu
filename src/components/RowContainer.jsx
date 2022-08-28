import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { Grid } from "@mui/material";
import Typography from "@material-ui/core/Typography";

const RowContainer = ({ flag, data, scrollValue }) => {
  
  return (
    <div
    
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
              
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-8">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col  justify-center">
          {/* <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p> */}
          <Grid    marginLeft={{xs:"0px", sm:"70px", md:"70px", lg:"70px"}} marginRight={{xs:"0px", sm:"70px", md:"70px", lg:"70px"}} style={{
             marginBottom:"100px"
          }}>
         
                <Grid xs={12} className="w-full text-center mb-5" style={{color: "#393d45"
              }}>
                {/* <Typography variant="h2"  style={{ fontSize:"32px"}} >
                  Neden Biz?
                </Typography> */}

                <section className="w-full " id="menu">
      <div className="w-full flex flex-col  justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2  before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 text-center">
        Neden Biz?
        </p>
      </div>
    </section>
                </Grid>

                <Grid container 
                
                >

            <Grid item xs={12}  sm={4} md={4} className="text-center">
<Grid container>
  <Grid xs={12} >
<Grid container className="justify-center">

<Grid xs={12} display={{xs:"block", sm:"none", md:"none", lg:"none"}}>
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-trustworthy.svg" alt="" style={{

marginLeft: "auto",
marginRight: "auto",
display: "block"
}} />
  </Grid>

  <Grid xs={9} className="text-center">
  <Typography variant="h6"  >
  Doğru Ürün
                </Typography>
                <Typography variant="body2" >
                Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net teminatlar ve net fiyatlarla kararın hep net olsun.
                </Typography>
  </Grid>
  <Grid xs={3} display={{xs:"none", sm:"block", md:"block", lg:"block"}}>
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-trustworthy.svg" alt="" style={{

marginLeft: "auto",
marginRight: "auto",
display: "block"
}} />
  </Grid>

</Grid>
  </Grid>
  <Grid xs={12} className="mt-10">
  <Grid container className="justify-center">

  <Grid xs={12} display={{xs:"block", sm:"none", md:"none", lg:"none"}}>
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-price.svg" alt=""  style={{

marginLeft: "auto",
marginRight: "auto",
display: "block"
}}/>
  </Grid>

  <Grid xs={9} className="text-center">
  <Typography variant="h6"  >
  İyi Fiyat
                </Typography>
                <Typography variant="body2"  >
                  
                Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.
                </Typography>
  </Grid>
  <Grid xs={3} className="hidden sm:flex">
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-price.svg" alt=""  style={{

marginLeft: "auto",
marginRight: "auto",
display: "block"
}}/>
  </Grid>

</Grid>

  </Grid>

</Grid>
            </Grid>

            <Grid item xs={12} sm={4} md={4} lg={4} className="text-center hidden sm:flex" >
              
<img src="https://insurance.ancorathemes.com/wp-content/uploads/2016/06/services_bg.jpg" alt="UgunuSec_Sigorta"  style={{
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
}} />

            </Grid>
            <Grid item xs={12}  sm={4} md={4} lg={4} className="text-center" marginTop={{xs:"2.5rem", sm:"0px", md:"0px", lg:"0px"}}>
            <Grid container>
  <Grid xs={12} >
<Grid container className="justify-center">
<Grid xs={3} className="hidden sm:flex">
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg" alt=""  style={{
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
}} />
  </Grid>


  <Grid xs={12} className=" sm:hidden">
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg" alt=""  style={{
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
}} />
  </Grid>

  <Grid xs={9} className="text-center">

  <Typography variant="h6"  >
  7/24 Hizmet
                </Typography>
                <Typography variant="body2"  >
                 Tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.
                </Typography>
  </Grid>


  
 

</Grid>
  </Grid>
  <Grid xs={12} className="mt-10">
  <Grid container className="justify-center">

  <Grid xs={3} className="hidden sm:flex">
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg" alt=""  style={{
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
}} />
  </Grid>

  <Grid xs={12} className=" sm:hidden">
<img src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg" alt=""  style={{
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
}} />
  </Grid>

  <Grid xs={9} className="text-center">
  <Typography variant="h6"  >
  7/24 Hizmet
                </Typography>
                <Typography variant="body2"  >

                 Tecrübemiz ve uzman sigorta danışmanlarımızla 7/24 her ihtiyacında yanındayız. Üstelik hasar anında saniyeler içinde bize ulaşabilirsin.

                </Typography>
  </Grid>
  

</Grid>

  </Grid>

  {/* <Grid item xs={12} sm={4} md={4} lg={4} className="text-center sm:hidden" >
              
              <img src="https://insurance.ancorathemes.com/wp-content/uploads/2016/06/services_bg.jpg" alt="UgunuSec_Sigorta"  style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block"
              }} />
              
                          </Grid> */}

</Grid>


            </Grid>
           
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
