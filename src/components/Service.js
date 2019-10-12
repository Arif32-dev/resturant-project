import React, { useState } from "react";
import styled from "styled-components";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { DivStyle } from "../styles/inlineDiv";
import ServiceDetails from "./ServiceDetails";

const Service = () => {
   const [data] = useState([
      {
         icon: <FaCocktail />,
         title: "free cocktails",
         text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
         icon: <FaHiking />,
         title: "Endless Hiking",
         text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
         icon: <FaShuttleVan />,
         title: "Free Shuttle",
         text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
         icon: <FaBeer />,
         title: "Strongest Beer",
         text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
   ]);
   return (
      <div className="service">
         <h1>Services</h1>
         <DivModified />
         <div className="service-container">
            {data.map((detail, index) => (
               <ServiceDetails
                  key={index}
                  icon={detail.icon}
                  title={detail.title}
                  text={detail.text}
               />
            ))}
         </div>
      </div>
   );
};

export default Service;
const DivModified = styled(DivStyle)`
   width: 7rem;
`;
