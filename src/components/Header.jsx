import React, { useState,useEffect } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "../img/logo34.jpeg";
import {MdAccountCircle} from "react-icons/md"
import {MdHome} from "react-icons/md"
import {MdLocalGroceryStore} from "react-icons/md"
import {MdLocalOffer} from "react-icons/md"
import {MdAccountBox} from "react-icons/md"
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";

import phone_icon from "../img/phone_1.png"
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed';


//import navigation
import FeatureLink from "./Navigation/Links/Features/FeaturesLink"
import FeatureHesap from "./Navigation/Links/Features/FeatureHesap";

const Header = () => {

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);


  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  
  

  return (
    <div>

      <div className=" w-screen    md:px-16" style={{background:"#FFFF" , borderBottom:"1px solid #AEAEB4" ,
    height:"40px",
    outline: "0",
    fontSize: "100%",
    }}>

      <div className="hidden lg:flex w-full h-full items-center justify-between">
        
        <Link to={"/"} className="flex items-center gap-2" style={{visibility:"hidden"}}>
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-white text-xl font-bold"> UygunuSec</p>
        </Link>

        <div className="flex items-center gap-8 ">

          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >

  <li className='text-base  hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer' style={{color:"#232d63"}}>
    <div style={{display:"flex", marginRight: "20px",
    borderRight: "1px solid",
    paddingRight: "20px"
}}>
    <img src={phone_icon} alt="Phone_UygunSeç"  style={{maxWidth:"20px" }}/>&nbsp;&nbsp;
  535 000 000
    </div>
      </li>
  <li className='text-base  hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer' style={{color:"#232d63"}}>
    <div style={{display:"flex", marginRight: "20px",
    borderRight: "1px solid",
    paddingRight: "20px"
}}>
  İletişim 
    </div>
    </li>
  <li className='text-base  hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'  style={{color:"#232d63"}}>EN</li>
          </motion.ul>

        </div>
      </div>

      </div>


<header className={`z-50 w-screen p-3 px-4 md:p-6 md:px-32 ${stickyClass}`} style={{background:"#FFFF", borderBottom:"10px solid #1c7b17" , height:"105px"}}>
      
      {/* desktop & tablet */}
      <div className="hidden lg:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className=" text-xl font-bold" style={{color:"#232d63"}}> UygunuSec</p>
        </Link>

        <div className="flex items-center gap-8 ">

          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >

<FeatureLink />
  <li className='text-base  hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer' style={{color:"#232d63"}}> Hakkımızda </li>
  <li className='text-base  hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer' style={{color:"#232d63"}}> Kampayalar</li>
  {/* <li className='text-base text-white hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'> Hızlı Teklif</li> */}
          </motion.ul>

          {/* <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div> */}

          <div className="relative">
            
            <ul>
  <FeatureHesap/>
            </ul>
          </div>
<ul  style={{
  borderRadius: "30px",
  width: "150px",
  height: "50px",
  background: "wheat",
  justifyContent:"start",
  marginTop: "auto",
  position:"relative",
  cursor:"pointer",
  color: "#232d63",
    background: "rgb(28, 123, 23)",
    boxShadow: "0 15px 25px rgb(0 0 0 / 20%)",
    transition: "all .1s linear"
}}>
<li className='text-base text-white hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer' style={{
  position:"absolute",
  top:"30%",
  marginLeft:"15px"
}}> Hızlı Teklif&nbsp;&nbsp;
<span style={{background:"#FFFF", borderRadius:"200%" }}>
<GpsNotFixedIcon/>
</span>
</li>
</ul>
          
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between lg:hidden w-full h-full ">

        {/* <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div> */}

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> UygunuSec</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src="{user ? user.photoURL : Avatar}"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick="{login}"
          />
          
          {/* {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"

            >
              {user && user.email === "abdoul.kowi@hibritmedya.com.tr" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )} */}
        </div>
      </div>
    </header>
    </div>
   
  );
};

export default Header;
