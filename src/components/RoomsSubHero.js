import React from "react";
import HeroContent from "./HeroContent";
import img from "../images/room-1.jpeg";
import { UpHeroStyled } from "../styles/inlineDiv";

const RoomsSubHero = () => {
   return (
      <UpHeroStyled img={img}>
         <HeroContent title="Our Rooms" buttontext="return home" link="/" />
      </UpHeroStyled>
   );
};
export default RoomsSubHero;
