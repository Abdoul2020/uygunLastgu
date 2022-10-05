import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import FooterAll from "./FooterAll";
import GenelFormAl from "./GenelFormAl";
import CarouselMain from "./CarouselMain";
import AskMostQuest from "./AskMostQuest";


const MainContainer = () => {
  
  // const [{ foodItems, cartShow }, dispatch] = useStateValue();
  // const [scrollValue, setScrollValue] = useState(0);

  // useEffect(() => {}, [scrollValue, cartShow]);

  const questions = [
    {
      id: 1,
      question: 'Popular Articles',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
      {
      id: 2,
      question: 'Fix problems & request removals',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
      {
      id: 3,
      question: 'Browse the web',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
        {
      id: 4,
      question: 'Search on your phone or tablet',
      answer: 'Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.',
    },
    
  ]


  return (
    <div className="w-full h-auto flex flex-col items-center justify-center " >
      <HomeContainer />

      <section className="w-full my-6" style={{
        background:"#f5f6f8"
      }}>
        <RowContainer/>
      </section>
      <GenelFormAl/>
      <MenuContainer />
     
   <AskMostQuest   data={questions}/>
      <CarouselMain/>

    </div>
  );
};

export default MainContainer;
