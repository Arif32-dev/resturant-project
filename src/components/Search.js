import React, { useContext } from "react";
import { DivStyle } from "../styles/inlineDiv";
import { MyContext } from "../context/Context";

const Search = () => {
   const {
      type,
      state,
      handleChangetype,
      handleChangecapacity,
      handleRange,
      handleMaxSize,
      handleMinSize,
      handleBreakfast,
      handlePets,
      capacity,
      objectdata,
      price,
      maxsize,
      minsize,
      breakfast,
      pets
   } = useContext(MyContext);
   // Get unique type from state
   //
   const datatype = state.map((data) => data.fields.type);
   const uniqueDataType = ["all", ...new Set(datatype)];
   //
   const datacapacity = state.map((data) => data.fields.capacity);
   const uniqueDataCapacity = [...new Set(datacapacity)];
   // End of setting unique type
   return (
      <div className="search-box">
         <h1>Search Rooms</h1>
         <DivStyle />
         <form className="form">
            {/* setting up type */}
            <div className="form-option">
               <label>Room Type:</label> <br />
               <select onChange={handleChangetype} value={type}>
                  {uniqueDataType.map((data, index) => (
                     <option key={index} value={data}>
                        {data}
                     </option>
                  ))}
               </select>
            </div>
            {/* End of type */}
            {/* seting up capacity */}
            <div className="form-option">
               <label>Guests:</label> <br />
               <select onChange={handleChangecapacity} value={capacity}>
                  {uniqueDataCapacity.map((data, index) => (
                     <option key={index} value={data}>
                        {data}
                     </option>
                  ))}
               </select>
            </div>
            {/* End of capacity */}
            {/* setting up price-range */}
            <div className="price-range">
               <label>
                  Price Range:
                  {""}${price}
               </label>
               <input
                  type="range"
                  min="0"
                  max={objectdata.maxPrice}
                  value={price}
                  onChange={handleRange}
               />
            </div>
            {/* End of price-range */}
            {/* Setting up size */}
            <div>
               <label>Room Size:</label>
               <input type="number" onChange={handleMinSize} value={minsize} />
               <input type="number" onChange={handleMaxSize} value={maxsize} />
            </div>
            {/* End of size */}
            {/* Setting up checkbox */}
            <div>
               <input
                  className="checkbox"
                  type="checkbox"
                  value={breakfast}
                  onChange={handleBreakfast}
               />
               <label>Breakfast</label>
               <br />
               <input
                  className="checkbox"
                  type="checkbox"
                  value={pets}
                  onChange={handlePets}
               />
               <label>Pets</label>
            </div>
            {/* End of checkbox */}
         </form>
      </div>
   );
};

export default Search;
