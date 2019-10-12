import React from "react";
import { ButtonContainer } from "../styles/buttonStyles";
import { Link } from "react-router-dom";
import { DivStyle } from "../styles/inlineDiv";
const HeroContent = ({ title, subtitle, buttontext, link }) => {
   return (
      <div className="hero-content">
         <h1>{title}</h1>
         <DivStyle />
         <p>{subtitle}</p>
         <Link to={link}>
            <ButtonContainer>{buttontext}</ButtonContainer>
         </Link>
      </div>
   );
};

export default HeroContent;
