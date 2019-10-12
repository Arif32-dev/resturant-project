import React, { useState } from "react";
import { UlNavbar } from "../styles/navStyle";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/beach_resort_data/logo/download.svg";
const Navbar = () => {
   const [state, setstate] = useState(false);
   const onchangeHandle = () => {
      setstate(!state);
   };
   console.log(state);
   return (
      <UlNavbar className={state ? "open" : "close"}>
         <Link to="/">
            <li>
               <img src={Logo} alt="logo" />
            </li>
         </Link>
         <Link to="/" className="responsive">
            <li>home</li>
         </Link>
         <Link to="/rooms" className="responsive">
            <li>rooms</li>
         </Link>
         <div className="logo">
            <FaAlignRight onClick={onchangeHandle} />
         </div>
      </UlNavbar>
   );
};

export default Navbar;
