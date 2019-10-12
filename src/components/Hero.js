import React from "react";
import HeroContent from "./HeroContent";
import { HeroStyled } from "../styles/inlineDiv";
import img from "../images/defaultBcg.jpeg";

const Hero = () => {
   return (
      <>
         <HeroStyled img={img}>
            <HeroContent
               title="Luxurious Rooms"
               subtitle="Deluxe Rooms Starting At $299"
               buttontext="our Rooms"
               link="/rooms"
            />
         </HeroStyled>
      </>
   );
};

export default Hero;
