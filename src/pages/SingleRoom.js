import React, { useContext } from "react";
import { UpHeroStyled } from "../styles/inlineDiv";
import HeroContent from "../components/HeroContent";
import { MyContext } from "../context/Context";
import {
   SingleRoomStyled,
   DetailsHolder,
   SubdetailsHolder
} from "../styles/roomsHolder";

const SingleRoom = ({ match }) => {
   const { state } = useContext(MyContext);
   const matchingObj = state.find(
      (data) => data.fields.slug === match.params.slug
   );
   const SlicedArr = matchingObj.fields.images.slice(
      1,
      matchingObj.fields.images.length
   );
   console.log(matchingObj.fields.images[0].fields.file.url);
   return (
      <>
         <UpHeroStyled img={matchingObj.fields.images[0].fields.file.url}>
            <HeroContent
               title={matchingObj.fields.name}
               link="/rooms"
               buttontext="back to rooms"
            />
         </UpHeroStyled>
         <SingleRoomStyled>
            {SlicedArr.map((data, i) => (
               <img src={data.fields.file.url} key={i} alt="room" />
            ))}
         </SingleRoomStyled>
         <DetailsHolder>
            <div>
               <h2>Details:</h2>
               <p>{matchingObj.fields.description}</p>
            </div>
            <div>
               <h2>Info:</h2>
               <p>Price: {matchingObj.fields.price}</p>
               <p>Size: {matchingObj.fields.size} SQFT</p>
               <p>Max Capacity: {matchingObj.fields.capacity} Person</p>
               <p>
                  {matchingObj.fields.pets
                     ? "Pets Are Allowed"
                     : "Pets Are Not Allowed"}
               </p>
            </div>
         </DetailsHolder>
         <div>
            <h2 className="extras">Extras:</h2>
            <SubdetailsHolder>
               {matchingObj.fields.extras.map((data, index) => (
                  <li key={index}>&#187;{data}</li>
               ))}
            </SubdetailsHolder>
         </div>
      </>
   );
};

export default SingleRoom;
