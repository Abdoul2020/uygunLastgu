import React from "react";
import Delivery from "../img/traffic.svg";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { Link } from "react-router-dom";
import {MdLocalGroceryStore} from "react-icons/md";
import { Grid } from "@mui/material";

const HomeContainer = () => {
  return (

    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
       {/* style={{backgroundImage: `url("https://c.tenor.com/dBl2QeiEUhgAAAAi/sticker-stickers.gif")` }} */}
       {/* items-start */}

      <div className="py-2 flex-1 flex flex-col  justify-center gap-6" style={{textAlign:"center"}}>
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            UgunuSec Sigorta.
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">

            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
          
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
        Sigortada Güvenin
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
          Adresi
          </span>
        </p>

        {/* <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p> */}

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          style={{width:"100%", textAlign:"center", justifyContent:"center"}}
        >
          <MdLocalGroceryStore /> Teklif Al.
          
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />



  <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center   py-4 gap-4  flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <Link to="">

                <Grid container xs={12}>
                  <Grid item xs={6} md={6} lg={6} sm={6}  key={n.id} >

                  <img
                  src={n.imageSrc}
                
                  alt="I1"
                />
                <p>
                  {n.name}
                </p>

                  </Grid>

                </Grid>
                
              {/* <div
                key={n.id}
                className="  lg:w-100 xl:p-8 md:p-4 sm:p-4 xs:p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
              </div> */}
              </Link>
            ))}
        </div>
       
       

      </div>
    </section>
  );
};

export default HomeContainer;
