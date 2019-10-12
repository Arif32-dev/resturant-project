import React from "react";

const ServiceDetails = ({ icon, title, text }) => {
   return (
      <div className="details">
         <span>{icon}</span>
         <h3>{title}</h3>
         <div>{text}</div>
      </div>
   );
};

export default ServiceDetails;
