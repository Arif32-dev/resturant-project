import React from "react";
import RoomsSubHero from "../components/RoomsSubHero";
import RoomsHolder from "../components/RoomsHolder";
import Search from "../components/Search";

const Rooms = () => {
   return (
      <div>
         <RoomsSubHero />
         <Search />
         <RoomsHolder />
      </div>
   );
};

export default Rooms;
