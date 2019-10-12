import React from "react";
import { ButtonContainer } from "../styles/buttonStyles";
import { Link } from "react-router-dom";
const EachRoom = ({ img, title, id, price, link }) => {
   return (
      <div className="rooms-info">
         <div className="image-holder">
            <img src={img} alt="Room" />
            <div className="text">
               ${price} <span>per night</span>
            </div>
            <Link to={`/rooms/${link}`}>
               <ButtonContainer>features</ButtonContainer>
            </Link>
         </div>
         <div className="img-title">{title}</div>
      </div>
   );
};

export default EachRoom;
