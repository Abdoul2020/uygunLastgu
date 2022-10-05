import React, { useState } from "react";
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


//import navigation
import FeatureLink from "./Navigation/Links/Features/FeaturesLink"
import FeatureHesap from "./Navigation/Links/Features/FeatureHesap";

const HeaderTop = () => {

  
  

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16" style={{background:"red",}}>
      
      {/* desktop & tablet */}
      <div className="hidden lg:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-white text-xl font-bold"> UygunuSec</p>
        </Link>

        <div className="flex items-center gap-8 ">
{/* 
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >

<FeatureLink />
  <li className='text-base text-white hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'> Hakkımızda </li>
  <li className='text-base text-white hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'> Kampayalar</li>
  <li className='text-base text-white hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'> Hızlı Teklif</li>
          </motion.ul>



          <div className="relative">
            
            <ul>
  <FeatureHesap/>
            </ul>
            
          </div> */}

          <ul>
            <li className='text-base text-white hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'>
                544 000 000
            </li>
            <li className='text-base text-white hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'>
                insan Kaynakları
            </li>
            <li className='text-base text-white hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'>
               EN
            </li>
          </ul>


        </div>
      </div>
     
    </header>
  );
};

export default HeaderTop;
