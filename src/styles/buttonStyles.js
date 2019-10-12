import styled from "styled-components";
export const ButtonContainer = styled.button`
   background: var(--primaryColor);
   transition: all ease-in-out 0.5s;
   text-transform: uppercase;
   font-size: 1.2rem;
   padding: 0.6rem 1.3rem;
   border: none;
   cursor: pointer;
   letter-spacing: 4px;
   font-weight: bold;
   display: inline-block;
   &:hover {
      background: var(--darkGrey);
   }
`;
