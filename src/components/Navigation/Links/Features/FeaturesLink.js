import React, { useState } from "react";
import { Link } from "react-router-dom";
//import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import {MdLocalGroceryStore} from "react-icons/md"

import Menu from "./Menu/Menu";

const FeaturesLink = () => {
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
      <li className='text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><MdLocalGroceryStore className='ml-8 '/> Ürünlerimiz </li>
      
      </Link>
      <Menu isVisible={visible} />{" "}
    </div>
  );
};
export default FeaturesLink;