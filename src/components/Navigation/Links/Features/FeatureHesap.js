import React, { useState } from "react";
import { Link } from "react-router-dom";
//import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import { MdLocalGroceryStore } from "react-icons/md";
import Avatar from "../../../../img/avatar.png";

import Menu from "./Menu/Menu";
import MenuTwo from "./Menu/MenuTwo";
import { motion } from "framer-motion";

const FeatureHesap = () => {
  const [visible, setVisible] = useState(false);

  const displayMenu = () => {
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };
  return (
    <div className="block" onMouseLeave={hideMenu}>
      <Link
        to=""
        activeclassname="cursor-pointer text-orange-400"
        onMouseOver={displayMenu}
      >
        <li className="text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={ Avatar}
            className="w-4 min-w-[10px] h-4 min-h-[10px] drop-shadow-xl cursor-pointer rounded-full ml-8"
            alt="UygunuSec"
          />
          Hesabım{" "}
        </li>{" "}
      </Link>{" "}
      <MenuTwo isVisible={visible} />{" "}
    </div>
  );
};
export default FeatureHesap;
