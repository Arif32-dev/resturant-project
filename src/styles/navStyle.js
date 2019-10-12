import styled from "styled-components";

export const UlNavbar = styled.ul`
   z-index: 44;
   position: fixed;
   overflow: hidden;
   top: 0;
   left: 0;
   right: 0;
   /* display: flex; */
   list-style: none;
   /* justify-content: space-around; */
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: 0.2rem;
   font-size: 1.2rem;
   background: var(--darkGrey);
   min-height: 3.5rem;
   /* align-items: center; */
   & li {
      margin: 0 1.5rem;
   }
   & a {
      float: left;
      display: block;
      text-decoration: none;
      padding: 0 1.5rem;
      color: var(--mainBlack);
      transition: all ease-in-out 0.5s;
      line-height: 3.5rem;
      &:hover {
         color: var(--primaryColor);
      }
   }
`;
