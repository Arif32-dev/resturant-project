import React, { useContext } from "react";
import { FaBan } from "react-icons/fa";
import { MyContext } from "../context/Context";
import EachRoom from "./EachRoom";
import styled from "styled-components";
import { RoomsHolderContainer } from "../styles/roomsHolder";

const RoomsHolder = () => {
   const { sortedRooms } = useContext(MyContext);

   return sortedRooms.length !== 0 ? (
      <UpRoomsHolderContainer>
         {sortedRooms.map((data) => (
            <EachRoom
               key={data.sys.id}
               img={data.fields.images[0].fields.file.url}
               title={data.fields.name}
               price={data.fields.price}
               id={data.sys.id}
               link={data.fields.slug}
            />
         ))}
      </UpRoomsHolderContainer>
   ) : (
      <>
         <h1
            style={{
               textAlign: "center",
               margin: "3rem",
               fontFamily: "Georgia",
               textTransform: "capitalize"
            }}
         >
            Unfortunately your search got no match <br />
            <FaBan />
         </h1>
      </>
   );
};

export default RoomsHolder;
const UpRoomsHolderContainer = styled(RoomsHolderContainer)`
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
