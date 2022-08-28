import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import FooterAll from "./FooterAll";

const MainContainer = () => {
  
  // const [{ foodItems, cartShow }, dispatch] = useStateValue();
  // const [scrollValue, setScrollValue] = useState(0);

  // useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center " >
      <HomeContainer />

      <section className="w-full my-6" style={{
        background:"#f5f6f8"
      }}>
        <RowContainer/>
      </section>
      <MenuContainer />
      {/* {cartShow && <CartContainer />} */}
      <FooterAll/>
    </div>
  );
};

export default MainContainer;
