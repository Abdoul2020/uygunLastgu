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

const Header = () => {

  
  

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16" style={{background:"black", borderBottom:"10px solid #1c7b17"}}>
      
      {/* desktop & tablet */}
      <div className="hidden lg:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
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

<FeatureLink />
  <li className='text-base text-white hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'><MdAccountBox className='ml-8 '/> Hakkımızda </li>
  <li className='text-base text-white hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'><MdLocalOffer className='ml-8 '/> Kampayalar</li>
  <li className='text-base text-white hover:hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'><MdLocalOffer className='ml-8 '/> Hızlı Teklif</li>
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
            
            {/* {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "abdoul.kowi@hibritmedya.com.tr" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      Yeni Servis Veren Ekle<MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Çıkış Yap<MdLogout />
                </p>
              </motion.div>
            )} */}


          </div>
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
  );
};

export default Header;
