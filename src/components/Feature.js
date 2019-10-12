import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import EachRoom from "./EachRoom";
import { RoomsHolderContainer } from "../styles/roomsHolder";
import { DivStyle } from "../styles/inlineDiv";

const Feature = () => {
   const { state } = useContext(MyContext);

   const obj = state.filter((data) => data.fields.featured === true);

   return (
      <div className="featured-room">
         <h1>Featured Rooms</h1>
         <DivStyle></DivStyle>
         <RoomsHolderContainer>
            {obj.map((data) => (
               <EachRoom
                  key={data.sys.id}
                  id={data.sys.id}
                  img={data.fields.images[0].fields.file.url}
                  title={data.fields.name}
                  price={data.fields.price}
                  link={data.fields.slug}
               />
            ))}
         </RoomsHolderContainer>
      </div>
   );
};

export default Feature;
